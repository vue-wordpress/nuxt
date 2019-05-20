import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '~/modules/wp.js'
  ],

  wpJson: {
    config: {
      url: 'https://test.wp.newfantastic.com/',
      lang: 'pl',
      pages: {
        home: 'sample-page'
      },
      menus: ['informacje', 'kontakt', 'dla-kupujacych', 'menu-glowne', 'testowe'],
      asyncData: true
    },
    store: 'manual',
    router: 'manual'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }

      for (let plugin of config.plugins) {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
          plugin.options = Object.assign(plugin.options, { chunksSortMode: 'none' })
        }
      }

      // if (ctx.isServer) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/^vue-wp-json/]
      //     })
      //   ]
      // }
      // console.log('cfg', config.module.rules)
      // const babelLoader = config.module.rules.find((rule) => rule.loader === 'babel-loader')
      // babelLoader.exclude = /node_modules\/vue-wp-json/
      // babelLoader.test = /\.(js|es6)$/
    },
  }
}
