const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
//    dest: ".vuepress/dist",
    lang: 'zh-CN',

    title: '双叶文档',

    description: '欢迎来到为双叶理央而创建的文档网站',

    plugins: [
      searchPlugin({
        maxSuggestions: '15',
	locales: {
	  '/': {
	    placeholder: '双叶一下',
	  },
	},
	isSearchable: (page) => page.path !== '/',
      }),
    ],

    theme: defaultTheme({
       
      home: '/',

      logo: '/images/futaba.jpg',

      docsRepo: 'https://github.com/Rmtdi/Futabadocs',

      editLinkText: '前往修改本文',

      lastUpdatedText: '上次编辑时间',

      contributorsText: '参与贡献列表',

      notFound: ['これ页面の消失！'],

      backToHome: '回首页去',

      navbar: [
        // 嵌套 Group - 最大深度为 2
        {
          text: '官方信息',
          children: [
            {
              text: '双叶理央',
              children: ['/futabadata/README.md','/futabadata/story.md'],
            },
            {
              text: '相关人物',
              children: ['...', '...'],
            },
          ],
        },
      ],

      sidebar: {
        '/futabadata/': [
          {
            text: '官方信息',
            collapsible: true,
            children: ['/futabadata/README.md', '...'],
          },
          /*{
            text: 'Bundlers Reference',
            collapsible: true,
            children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
          },*/
        ],
      },
    }),
  }
