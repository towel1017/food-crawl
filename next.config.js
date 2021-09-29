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