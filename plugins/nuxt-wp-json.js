import Vue from 'vue'
import WpJson from '../vue-wp-json/dist'
import * as vuex from '../vue-wp-json/dist/plugin/initializers/store'

export default (ctx, inject) => {
  const options = <%= serialize(options) %>

  Vue.use(WpJson, options)

  vuex.registerModules(ctx.store)
  vuex.loadBase(ctx.store.dispatch, false) // menus
  vuex.setLang(ctx.store.commit, 'pl') 
  vuex.setConfig(ctx.store.commit, {
    ...options.config,
    asyncData: true
  }) 
  
}