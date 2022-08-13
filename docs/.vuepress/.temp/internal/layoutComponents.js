import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/李壮的文档网站/ftbdocs/Futabadocs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/李壮的文档网站/ftbdocs/Futabadocs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
