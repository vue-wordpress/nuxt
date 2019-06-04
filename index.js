import path from 'path'
import  { routes } from '@vue-wordpress/core/router/routes'

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

  if(config.router === true) {
    const r = routes(true)
    this.nuxt.options.router.extendRoutes = (nuxtRoutes, resolve) => {
      nuxtRoutes.push(...r.map((route) => {
  
        let cmp = route.component.replace('../', 'node_modules/@vue-wordpress/core/')
        return { ...route, component: resolve(cmp) }
  
      }))
    }
  }

}
