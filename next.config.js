const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/dashboard': { page: '/dashboard' },
    '/demandas': { page: '/demandas' },
  }),
  basePath: isProd ? '/home' : '',
  assetPrefix: isProd ? '/home' : '',
}