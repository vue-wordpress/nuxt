import Vue from 'vue'
import WpJson from '@vue-wordpress/core'
import * as vuex from '@vue-wordpress/core/plugin/initializers/store'

export default async (ctx, inject) => {
  const options = <%= serialize(options) %>;

  vuex.registerModules(ctx.store)

  Vue.use(WpJson, options)

  vuex.setConfig(ctx.store.commit, {
    url: options.url,
    lang: options.lang,
    ...(options.requestPrefix ? { requestPrefix: options.requestPrefix } : {}),
    ...(options.menus ? { menus: options.menus } : {}),
    ...(options.titleTemplate ? { titleTemplate: options.titleTemplate } : {}),
    ...(options.debugger ? { debugger: options.debugger } : {}),
    asyncData: true
  }) 
  
  await vuex.loadBase(ctx.store.dispatch, options.hasOwnProperty("menus") ? options.menus : true) // menus
  
}
