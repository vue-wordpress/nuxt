import Vue from 'vue'
import WpJson from 'vue-wp-json'
import * as vuex from 'vue-wp-json/plugin/initializers/store'

// console.log(this)

export default (ctx, inject) => {
  Vue.use(WpJson, {
    config: {
      url: 'https://test.wp.newfantastic.com/',
      lang: 'pl',
      pages: {
        home: 'strona-domowa'
      },
      menus: ['informacje', 'kontakt', 'dla-kupujacych', 'menu-glowne', 'testowe']
    },
    store: 'manual',
    router: 'manual'
  })

  vuex.registerModules(ctx.store)
  vuex.loadBase(ctx.store.dispatch, false) // menus
  vuex.setLang(ctx.store.commit, 'pl')
}