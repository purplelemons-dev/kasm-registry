/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Purplelemons test',
    description: 'my first kasm repo',
    icon: '/img/logo.svg',
    listUrl: 'https://purplelemons-dev.github.io/kasm-registry/',
    contactUrl: 'https://github.com/purplelemons-dev#contact',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
