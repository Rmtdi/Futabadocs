const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
//    dest: ".vuepress/dist",
    lang: 'zh-CN',

    title: '双叶文档',

    description: '欢迎来到为双叶理央而创建的文档网站',
/*
    plugins: [
      searchPlugin({
        maxSuggestions: '15'
      }),
    ],
*/
    theme: defaultTheme({
       
      home: '/',

      logo: '/images/futaba.jpg',

      docsRepo: 'https://github.com/Rmtdi/Futabadocs',

      navbar: [
        // 嵌套 Group - 最大深度为 2
        {
          text: '官方信息',
          children: [
            {
              text: '双叶理央',
              children: ['futabadata/README.md'],
            },
            {
              text: 'SubGroup2',
              children: ['/more/README.md', '/group/sub/bar.md'],
            },
          ],
        },
      ],

      sidebar: {
        '/more/': [
          {
            text: 'VuePress Reference',
            collapsible: true,
            children: ['/reference/cli.md', '/reference/config.md'],
          },
          {
            text: 'Bundlers Reference',
            collapsible: true,
            children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
          },
        ],
      },
    }),
  }