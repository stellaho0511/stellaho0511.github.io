import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDataPath(path: string): string {
  // Next.js에서 public 폴더의 파일들은 루트 경로(/)에서 제공됩니다
  // 따라서 /public/을 제거하고 /로 시작하는 경로를 반환합니다
  if (path.startsWith("/")) {
    return path;
  }
  return `/${path}`;
}
