import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
//    dest: "/.vuepress/dist",
    lang: 'zh-CN',

    title: '双叶文档',

    description: '欢迎来到为双叶理央而创建的文档网站',

	
    plugins: [
      searchPlugin({
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

      contributorsText: '参与贡献名单',

      notFound: ['文档页面の消失！'],

      backToHome: '< 回到首页',

      navbar: [
        // 嵌套 Group - 最大深度为 2
        {
          text: '官方信息',
          children: [
            {
              text: '双叶理央',
              children: ['/Rio/FutabaRio.md','/Rio/story.md'],
            },
          ],
        },
        {
          text: '同人作品',
          children: [
            {
              text: '图片',
              children: ['/ff/images/']
            },
            {
              text: '音乐',
              children: ['/Rio/FutabaRio.md','/Rio/story.md']
            },
          ],
        },
      ],

      sidebar: {
        '/Rio/': [
          {
            text: '双叶理央',
            collapsible: true,
            children: ['/Rio/FutabaRio.md', '/Rio/story.md'],
          },
        ],
        '/ff/': [
          {
            text: '同人图画',
            collapsible: true,
            children: ['/ff/images/'],
          },
          {
            text: '同人音乐',
            collapsible: true,
            children: ['/ff/images/'],
          },
        ],
        '/ff/images/': [
          {
            text: '同人图画',
            collapsible: true,
            children: [
              '/ff/images/',
              '/ff/images/Railcup_Lerio.md',
            ],
          }
        ]
      },
    }),
  }
