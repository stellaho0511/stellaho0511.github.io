const nextConfig = {
  output: 'export',
  // GitHub Pages에서 저장소 이름이 username.github.io가 아닌 경우 basePath 설정
  basePath: process.env.NEXT_PUBLIC_BASE_PATH 
    ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` 
    : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
