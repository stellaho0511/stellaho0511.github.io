"use client"

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function PageViewTracker() {
  const pathname = usePathname()
  const hasTracked = useRef(false)

  useEffect(() => {
    // 페이지 변경 시 방문 추적 (한 번만)
    if (hasTracked.current) {
      hasTracked.current = false
      return
    }

    const trackPageView = async () => {
      const pageData = {
        path: pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
      }

      // API로 전송 (에러 처리 무시 - 로깅 실패가 사용자 경험에 영향을 주지 않도록)
      try {
        // 로컬 API route 시도
        await fetch('/api/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pageData),
        }).catch(() => {
          // 실패해도 무시
        })

        // Google Sheets Web App 시도 (환경 변수에 설정되어 있으면)
        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL
        if (googleSheetsUrl) {
          await fetch(googleSheetsUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(pageData),
            mode: 'no-cors', // CORS 우회
          }).catch(() => {
            // 실패해도 무시
          })
        }
      } catch (error) {
        // 에러 무시
      }

      hasTracked.current = true
    }

    // 페이지 로드 완료 후 추적
    const timer = setTimeout(() => {
      trackPageView()
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname])

  return null // 이 컴포넌트는 UI를 렌더링하지 않음
}

