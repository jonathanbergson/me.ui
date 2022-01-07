import { defineClientAppEnhance } from '@vuepress/client'
import MeUI from './../../src/main'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(MeUI)
})
