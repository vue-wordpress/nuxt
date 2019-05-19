import path from 'path'
// import Vue from 'vue'
import  { routes } from 'vue-wp-json/router/routes'

export default function nuxtBootstrapVue (moduleOptions) {
  // this.addPlugin(path.resolve(__dirname, '../plugins/nuxt-wp-json.js'))
  
  const r = routes()
  this.nuxt.options.router.extendRoutes = (nuxtRoutes, resolve) => {
    nuxtRoutes.push(...r.map((route) => {
      return { ...route }
    }))
  }
  console.log(this.nuxt.options.router, 'ABC')
  //extendRoutes

}