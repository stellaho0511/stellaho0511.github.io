#!/bin/bash
# 프로젝트 패키징 스크립트

PROJECT_NAME="dahye_cv_project"
EXCLUDE_PATTERNS=(
    "node_modules"
    ".next"
    "out"
    "build"
    ".DS_Store"
    "*.log"
    ".env*"
    ".vercel"
    "*.tsbuildinfo"
    "next-env.d.ts"
    ".git"
)

EXCLUDE_ARGS=""
for pattern in "${EXCLUDE_PATTERNS[@]}"; do
    EXCLUDE_ARGS="$EXCLUDE_ARGS --exclude=$pattern"
done

tar $EXCLUDE_ARGS -czf "${PROJECT_NAME}.tar.gz" .

echo "✅ 압축 완료: ${PROJECT_NAME}.tar.gz"
echo "📦 파일 크기: $(du -h ${PROJECT_NAME}.tar.gz | cut -f1)"
