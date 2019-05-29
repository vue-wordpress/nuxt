# Vue Wordpress Nuxt.js Module

<br>

 WordPress module for Nuxt.js with full support for SSR and Nuxt.js PWA module.

> More Info – https://nuxt.vuewordpress.io



<br>



- [Installation](#installation)

  - [Nuxt.js](#a-nuxtjs)
  - [Vue.js](#b-vuejs)
  - [Vue Storefront](#c-vue-storefront)

- [Usage](#usage)

  - [Pages](#pages)
  - [Posts](#posts)
  - [Media](#media)
  - [Menus](#menus)

- [Additional modules (Coming soon)](#additional-modules)

  - [Free Extensions](#free-extensions)

    - [Yoast SEO Module (Coming soon)](#yoast-extension)
    - [i18n Module (Coming soon)](https://vuejs.shop/modules/@vue-wordpress/qtranslate)

  - [PRO Extensions](#pro-extensions)

    - [Advanced Custom Fields Extension (Coming soon)](https://vuejs.shop/modules/@vue-wordpress/acf)
    - [DIVI Page Builder Extension (planned for Fall 2019)](https://vuejs.shop/modules/@vue-wordpress/divi)

<br>

## Installation

<br>

Go to your app's main directory and run:

```
npm install @vue-wordpress/nuxt
```

or

```
yarn add @vue-wordpress/nuxt
```



<br>



Create Vuex Store in your application if it does not exist. You can do it by creating **index.js** file in **store directory** and put there content like:



```javascript
export const state = () => ({

})

export const mutations = {

}

export const actions = {}
```



<br>



Open **nuxt.config.js** and add **@vue-wordpress/core** in `modules` section with additional configuration.





```js
modules: [
  [
    '@vue-wordpress/core',
    {
      config: {
        url: 'https://wp.mysite.com/',
        lang: 'en'
      },
      store: 'manual',
      router: 'manual'
    }
  ]
]
```

##### Using top level options

```js
modules: [
  '@vue-wordpress/nuxt'
],
wpJson: {
  config: {
    url: 'https://wp.mysite.com/',
    lang: 'en'
  },
  store: 'manual',
  router: 'manual'
}
```



**As we cannot access Router and Store from nuxt.config.js we have to set it as `'manual'`**. The module will do the job and inject them other way.



As a last step we have to tell Nuxt to transpile the core module.

```js
build: {
  transpile: ['@vue-wordpress/nuxt']
}
```

If you use any extension you just need to add it to the transpile array:

```js
build: {
  transpile: ['@vue-wordpress/nuxt', '@vue-wordpress/acf']
}
```

That is all. Now you can use Vue Worpress module for Nuxt.js!

<br>

<br>

### B. Vue.js



<br>



If you want to use this module with **regular Vue.js**, you can use core module used by this package available here: <a href="https://github.com/vue-wordpress/core">`@vue-wordpress/core`</a>



<br>



### C. Vue Storefront



<br>



If you want to use this module with **Vue Storefront**, we have created a dedicated package available here: 
<a href="https://github.com/vue-wordpress/vsf">`@vue-wordpress/vsf`</a>



<br>



## Usage

<br>

### Pages

<br>

All you need to do to create new Page's route in your app is to create it in Wordpress Admin in **_Pages_** tab. It will automatiaclly be available under `/page/<:page_slug>` route.

<br>

### Posts

<br>

The process is the same as above. You just need to create and publish new post in Wordpress Admin at **_Posts_** tab. It will automatiaclly be  available under `/post/<:post_slug>` route.

<br>

### Media

<br>

To be written.

<br>

### Menus

<br>

To be able to use WordPress Menus in your app, you **have to install additional plugin in your WordPress** - **<a href="https://pl.wordpress.org/plugins/wp-rest-api-v2-menus/">WP-REST-API V2 Menus plugin</a>**. It extends native Wordpress REST API by adding a new endpoint with menus at `/wp-json/menus/v1/menus/`. After you have added the plugin `@vue-wordpress/core` will automatically detect and store your menus at:

<br>

```
store.state.wp_rest_content.menus[YOUR_MENU_SLUG]
this.$store.state.wp_rest_content.menus[YOUR_MENU_SLUG]
```

<br>

## Advanced Usage

<br>

More information about additional features available with PRO version of module will be available here: https://vuejs.shop/modules/@vue-wordpress/core-pro

<br>

## Additional modules (Coming soon)

<br>

### Free Extensions

<br>

- [Yoast SEO Extension (Coming soon)](#yoast-extension)

- [qTranslate Extension (Coming soon)](#qtranslate-extension)

<br>

<a name="yoast-extension"></a>

#### Yoast SEO Extension (Coming soon)

<br>

https://github.com/new-fantastic/@vue-wordpress/core-yoast

<br>

<a name="qtranslate-extension"></a>

#### qTranslate Extension (Coming soon)

<br>

https://github.com/new-fantastic/@vue-wordpress/core-qtranslate-x

<br>

### PRO Extensions

<br>

- [Advanced Custom Fields Extension](#acf-extension)

- [DIVI Page Builder Extension (planned for Fall 2019)](#divi-extension)

<br>

<a name="acf-extension"></a>

#### Advanced Custom Fields Extension (Coming soon)

<br>

https://vuejs.shop/modules/@vue-wordpress/core-acf

<br>

<a name="divi-extension"></a>

#### DIVI Page Builder Extension (planned for Fall 2019)

<br>

https://vuejs.shop/modules/@vue-wordpress/core-divi
