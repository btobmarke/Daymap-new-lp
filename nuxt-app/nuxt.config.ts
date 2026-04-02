// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devServer: {
    port: 3000,
    host: 'localhost'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      "@fortawesome/vue-fontawesome"
    ]
  },
  vite: {
    server: {
      hmr: true,
      watch: {
        usePolling: true
      }
    }
  },
  nitro: {
    preset: process.env.VERCEL ? 'vercel' : 'aws-lambda',
    serveStatic: true,
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  css: [
    "~/public/css/normalize.css",
    "~/public/css/destyle.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      style: [{ children: "body { background-color: #f5f4f1; font-family: 'Noto Sans JP', sans-serif; }" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
          crossorigin: "",
        },
      ],
      script: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-MSSD7NVH');`,
          type: 'text/javascript'
        }
      ]
    },
  },
})



