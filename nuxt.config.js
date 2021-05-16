export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
    title:
      'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC) | $TOLE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'توله سگ, جذب, توکن فارسی, توکن ایرانی, توکن توله سگ, tolesag,tole,sag,$TOLE',
      },
      // Google Search Engine Tags
      {
        itemprop: 'name',
        hid: 'google-name',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      {
        itemprop: 'description',
        hid: 'google-description',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      // Facebook Meta Tags
      { itemprop: 'image', hid: 'facebook-image', content: '' },
      { property: 'og:url', hid: 'og:url', content: '' },
      { property: 'og:type', hid: 'og:type', content: 'website' },
      {
        property: 'og:title',
        hid: 'og:title',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      {
        property: 'og:image',
        hid: 'og:image',
        content: '',
      },
      // Twitter Meta Tags
      { name: 'twitter:card', hid: 'twitter:card', content: '' },
      {
        name: 'twitter:title',
        hid: 'twitter:title',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      {
        name: 'twitter:description',
        hid: 'twitter:description',
        content:
          'توله سگ | اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم (ETH) و بایننس (BSC)',
      },
      {
        name: 'twitter:image',
        hid: 'twitter:image',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['@nuxtjs/vuetify', { rtl: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
