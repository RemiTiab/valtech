export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  // mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  generate: {
    routes: [],
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  meta: {
    ogType: false,
    ogTitle: false,
    ogDescription: false,
  },
  head: {
    title: "Valtech",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      /* {
        hid: "description",
        name: "description",
        content:
          "Valtech - Test",
      }, */
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Valtech - Test",
      },
      {
        hid: "apple-mobile-web-app-title",
        property: "apple-mobile-web-app-title",
        content: "Valtech - Test",
      },
      /* {
        hid: "og:image",
        property: "og:image",
        content: "@TODO",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "@TODO",
      }, */
      { hid: "twitter:site", name: "twitter:site", content: "@valtech_" },
      /* {
        hid: "og:title",
        property: "og:title",
        content: "Valtech - Test",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Valtech - Test",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Valtech - Test",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Valtech - Test",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "@TODO",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "@TODO",
      }, */
    ],
    link: [
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project
    "~assets/scss/global",
    /* "~assets/scss-tarteaucitron/tac", */
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "~/plugins/vueResize.js" }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [{ path: "~/components", pathPrefix: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap",
    "vue-browser-detect-plugin/nuxt",
  ],
  styleResources: {
    scss: [
      "~node_modules/breakpoint-sass/stylesheets/_breakpoint.scss",
      "~assets/scss/1-abstracts/*.scss",
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/redirect-module",
    "vue-scrollto/nuxt",
    "vue-social-sharing/nuxt",
  ],
  redirect: [],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:3000", // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        "postcss-object-fit-images": {},
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  sitemap: {
    hostname: "@TODO",
    gzip: true,
  },
};
