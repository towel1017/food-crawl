/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'https://api.notion.com/:path*',
          },
        ]
      },
  };