export const data = JSON.parse("{\"key\":\"v-14f73021\",\"path\":\"/more/\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1660290722000,\"contributors\":[{\"name\":\"Rmtdi\",\"email\":\"rmtdiyl@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"more/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
