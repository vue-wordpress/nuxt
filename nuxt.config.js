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
    // Doc: https://axios.nuxtjs.org/usage
    '~/modules/wp.js'
  ],

  wpJson: {
    config: {
      url: 'https://wp.maanu.pl/',
      lang: 'pl',
      pages: {
        home: 'sample-page'
      }
    },
    store: 'manual',
    router: 'manual',
    plugins: ['acf']
  },

  /*
  ** Build configuration
  */
  build: {

    transpile: ['vue-wp-json', 'vue-wp-json-acf'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      for (let plugin of config.plugins) {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
          plugin.options = Object.assign(plugin.options, { chunksSortMode: 'none' })
        }
      }
    }
  }
}
