/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  sw: '/sw.js',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['loremflickr.com'],
  }
}

module.exports = withPWA({
  ...nextConfig,
})
