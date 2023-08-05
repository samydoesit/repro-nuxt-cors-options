// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // This fixes the issue OPTIONS request is not reaching Nuxt Server
  // vite: {
  //   server: {
  //     cors:
  //       {
  //         origin: true,
  //         preflightContinue: true,
  //       },
  //   }
  // }
})
