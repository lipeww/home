const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/dashboard': { page: '/dashboard' },
    '/demandas': { page: '/demandas' },
  }),
  basePath: isProd ? '/home' : '',
  assetPrefix: isProd ? '/home' : '',
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}