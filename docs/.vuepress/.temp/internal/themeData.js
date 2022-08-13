export const themeData = JSON.parse("{\"home\":\"/\",\"logo\":\"/images/futaba.jpg\",\"docsRepo\":\"https://github.com/Rmtdi/Futabadocs\",\"navbar\":[{\"text\":\"官方信息\",\"children\":[{\"text\":\"双叶理央\",\"children\":[\"/futabadata/README.md\",\"/futabadata/story.md\"]},{\"text\":\"相关人物\",\"children\":[\"...\",\"...\"]}]}],\"sidebar\":{\"/futabadata/\":[{\"text\":\"官方信息\",\"collapsible\":true,\"children\":[\"/futabadata/README.md\",\"...\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
