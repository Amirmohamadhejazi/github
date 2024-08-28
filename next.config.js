/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 900,
        dangerouslyAllowSVG: false,
        remotePatterns: [],
    },
}

module.exports = nextConfig
