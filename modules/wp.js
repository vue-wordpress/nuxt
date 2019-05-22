import path from 'path'
import  { pagePrefix, postPrefix, routes } from 'vue-wp-json/router/routes'

export default async function nuxtBootstrapVue (moduleOptions) {

  // Register core
  // It is under extensions, because this.addPlugin adds plugin at the beginning of the array
  this.addPlugin({
    src: path.resolve(__dirname, '../plugins/nuxt-wp-json.js'),
    filename: 'wpjson.js',
    options: this.options.wpJson
  })


  const r = routes(true)
  this.nuxt.options.router.extendRoutes = (nuxtRoutes, resolve) => {
    nuxtRoutes.push(...r.map((route) => {

      let cmp = route.component.replace('../', 'node_modules/vue-wp-json/')
      // console.log(cmp)
      return { ...route, component: resolve(cmp) }

    }))
  }

}