import path from 'path'

export default async function nuxtBootstrapVue (moduleOptions) {

  // Register core
  // It is under extensions, because this.addPlugin adds plugin at the beginning of the array
  const config = (moduleOptions && Object.keys(moduleOptions).length > 0)
    ? moduleOptions
    : this.options.wpJson

  this.addPlugin({
    src: path.resolve(__dirname, './plugins/nuxt-wp-json.js'),
    filename: 'wpjson.js',
    options: config
  })

}
