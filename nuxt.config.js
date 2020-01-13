const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        // base: "/price-log-website/"
        base: "/"
      }
    : {};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: titleChunk => {
      return titleChunk
        ? `Price Log - ${titleChunk}`
        : `Price Log - A Journal For Your Prices`;
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { property: "og:site_name", content: "Price Log"},
      { property: "og:title", content: "Price Log - A Journal For Your Prices"},
      { property: "og:description", content: "A mobile app that helps you compare prices and save money!"},
      { property: "og:image", content: "/thumbnail-landscape.jpg"},
      { property: "og:url", content: "http://www.pricelogapp.com"},
      { name: "twitter:card", content: "summary_large_image"},
      { name: "twitter:image", content: "/thumbnail-landscape.jpg"},
      { name: "twitter:image:alt", content: "Price Log app image"},
      { name: "twitter:site", content: "@chase_whiteside"},
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/icon.png"},
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },

  router: {
    ...routerBase
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "~/styles/global.scss"],

  styleResources: {
    scss: ["~/styles/_bitsnpieces.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/flickity", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources", "nuxt-responsive-loader"],
  /*
   ** Build configuration
   */
  responsiveLoader: {
    format: "jpg",
    min: 250,
    max: 1000,
    steps: 3,
    adapter: require("responsive-loader/sharp"),
    quality: 75
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
