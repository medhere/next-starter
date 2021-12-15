module.exports = {
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {
        source: '/components/:all*',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
