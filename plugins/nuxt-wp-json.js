import Vue from 'vue'
import WpJson from 'vue-wp-json'
import * as vuex from 'vue-wp-json/plugin/initializers/store'

export default async (ctx, inject) => {
  const options = <%= serialize(options) %>;

  vuex.registerModules(ctx.store)

  const plugins = []

  for(let plugin of options.plugins) {
    const x = await import(`../node_modules/vue-wp-json-${plugin}/index.js`)
    const ext = 'default' in x ? x.default : x
    ext.store = ctx.store
    plugins.push(ext)
  }

  Vue.use(WpJson, {
    ...options,
    plugins
  })
  
  vuex.loadBase(ctx.store.dispatch, false) // menus
  vuex.setLang(ctx.store.commit, 'pl') 
  vuex.setConfig(ctx.store.commit, {
    ...options.config,
    asyncData: true
  }) 

  // console.log(Object.keys(ctx.app.context), inject)
  
}