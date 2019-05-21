import path from 'path'
import  { pagePrefix, postPrefix, routes } from 'vue-wp-json/router/routes'

export default function nuxtBootstrapVue (moduleOptions) {

  // Register extensions
  if('nuxtPlugins' in this.options.wpJson) {
    for(let plugin of this.options.wpJson.nuxtPlugins) {
      this.addPlugin({
        src: path.resolve(__dirname, `../plugins/${plugin}.js`),
        filename: `${plugin}.js`
      })
    }
  }

  // Register core
  // It is under extensions, because this.addPlugin adds plugin at the beginning of the array
  this.addPlugin({
    src: path.resolve(__dirname, '../plugins/nuxt-wp-json.js'),
    filename: 'wpjson.js',
    options: this.options.wpJson
  })


  let customPage = null
  let customPost = null

  // if(this.options.wpJson.plugins) {
  //   for(let plugin of this.options.wpJson.plugins) {
  //     if('layouts' in plugin) {
  //       if('Page' in plugin.layouts) {
  //         customPage = plugin.layouts.Page
  //       }
    
  //       if('Post' in plugin.layouts) {
  //         customPost = plugin.layouts.Post
  //       }
  //     }
  //   }
  // }

  const r = routes(undefined, undefined, true)
  this.nuxt.options.router.extendRoutes = (nuxtRoutes, resolve) => {
    nuxtRoutes.push(...r.map((route) => {
      // let cmp = route.component.replace('..', 'vue-wp-json/dist')
      let cmp = route.component.replace('../', 'node_modules/vue-wp-json/')
      // console.log(cmp)
      if(route.name == pagePrefix && customPage !== null) {
        cmp = customPage
      } else if(route.name == postPrefix && customPost !== null) {
        cmp = customPost
      }
      return { ...route, component: resolve(cmp) }
    }))
  }

}