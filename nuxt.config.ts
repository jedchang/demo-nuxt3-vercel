// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/demo-nuxt3/' : '/',
    buildAssetsDir: '/static/',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
    }
  },

  css: ['~/assets/scss/main.scss'],
  modules: ['@element-plus/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/utils/_variables.scss" as *;`
        }
      }
    }
  }
})
