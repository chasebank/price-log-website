
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
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://npmcdn.com/flickity@2/dist/flickity.pkgd.js"
      }
    ]
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
  plugins: [],
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
