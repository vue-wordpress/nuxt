import Vue from 'vue'
import WpJson from 'vue-wp-json'
import * as vuex from 'vue-wp-json/plugin/initializers/store'
import registerPlugin from 'vue-wp-json/plugin/registerPlugin'

export default async (ctx, inject) => {
  const options = <%= serialize(options) %>;

  vuex.registerModules(ctx.store)

  Vue.use(WpJson, {
    ...options,
    plugins: []
  })

  if (options.plugins) {
    for (let plugin of options.plugins) {
      registerPlugin(Vue, plugin, ctx.store)
    }
  }
  
  vuex.loadBase(ctx.store.dispatch, false) // menus
  vuex.setLang(ctx.store.commit, options.config.lang) 
  vuex.setConfig(ctx.store.commit, {
    ...options.config,
    asyncData: true
  }) 

  
}
