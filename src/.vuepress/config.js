const { createNamedExports } = require('typescript');
const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: '开源指北',
  description: '一份给开源新手的保姆级开源百科',
  base: '/opensource-guide/',
  displayAllHeaders: true,
  dest: './dist',
  // remove this if you are not using Vue and React in "markdownEnhance: code demo"
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
      }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    darkmode: 'switch',
    baseLang: 'zh-CN',
    hostname: 'https://getiot.tech',
    searchMaxSuggestions: 10,
    themeColor: {
      green: '#4fad54',
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f'
    },
    nav: [
      { text: '首页', link: '/', icon: 'home' },
      { text: '开源指北', link: '/guide/' },
      { text: '开源故事', link: '/story/' },
      { text: '编写成员', link: '/members/' },
      {
        text: '我也要贡献',
        ariaLabel: 'contribute',
        items: [
          { text: '开源指北仓库', link: 'https://gitee.com/gitee-community/opensource-guide' },
          { text: '如何加入我们', link: '/joinus/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '第一部分：初识开源', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: '第一部分：初识开源/',
          children: [
            '第 1 小节：什么是开源',
            '第 2 小节：开源与个人技术成长',
            '第 3 小节：如何判断一个项目是否是开源的',
            '第 4 小节：关于开源基金会',
            '第 5 小节：有关开源的常见误区',
            '第 6 小节：常见文件认识',
            '第 7 小节：企业视角看待开源',
            '第 8 小节：开源发展趋势'
          ]
        },
        {
          title: '第二部分：学习和使用开源项目',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: '第二部分：学习和使用开源项目/',
          children: [
            '第 1 小节：如何找到适合自己学习和使用的开源项目',
            '第 2 小节：开源项目的源代码该怎么读',
            '第 3 小节：认识开源许可证',
            '第 4 小节：开源中的赞赏文化',
            '第 5 小节：如何找到最强开源项目'
          ]
        },
        {
          title: '第三部分：尝试参与开源',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: '第三部分：尝试参与开源/',
          children: [
            '第 1 小节：开源项目中的不同角色',
            '第 2 小节：个人为什么要参与开源贡献',
            '第 3 小节：企业为什么要参与开源',
            '第 4 小节：可以用哪些方式参与开源',
            '第 5 小节：如何找到适合的项目进行贡献',
            '第 6 小节：提交第一个 Issue',
            '第 7 小节：提交第一个 Pull Request',
            '第 8 小节：如何成为一个项目的核心贡献者',
            '第 9 小节：开源项目的贡献准则和贡献者公约'
          ]
        },
        {
          title: '第四部分：启动自己的开源项目',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: '第四部分：启动自己的开源项目/',
          children: [
            '第 1 小节：有了开源的想法后从何开始',
            '第 2 小节：为开源项目建立良好的基础',
            '第 3 小节：开源许可证的应用',
            '第 4 小节：为自己的开源项目建立贡献准则',
            '第 5 小节：开源项目的维护和管理',
            '第 6 小节：CONTRIBUTING 编写'
          ]
        },
        {
          title: '第五部分：开源治理',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: '第五部分：开源治理/',
          children: ['第 1 小节：个人维护和建立社区，两者如何选择', '第 2 小节：打造开源社区', '第 3 小节：开源项目的常见治理架构', '第 4 小节：确保开源代码质量的几个要点']
        },
        {
          title: '第六部分：有关开源的其他问题',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: '第六部分：其他问题/',
          children: ['第 1 小节：怎样在本职工作和开源项目间做好平衡', '第 2 小节：关于开源项目的商业化']
        }
      ],

      '/git_tutorial/': [
        {
          title: 'Git 入门（初级篇）', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: 'Git 入门（初级篇）/',
          children: ['什么是版本控制和 Git', '如何安装 Git', 'Git 的入门使用']
        },
        {
          title: 'Git 命令详解', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 2
          prefix: 'Git 命令详解/',
          children: ['常用 Git 命令', '分支与合并相关命令', '使用命令操作远程仓库', '搭建 Git 相关命令']
        },
        {
          title: 'Git 团队协作与管理（进阶篇）', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 3, // 可选的, 默认值是 2
          prefix: 'Git 团队协作与管理（进阶篇）/',
          children: [
            {
              title: '分布式 Git',
              prefix: '分布式 Git/',
              children: ['1. 分布式工作流程', '2. 向一个项目贡献', '3. 维护项目']
            },
            {
              title: 'Git 工具',
              prefix: 'Git 工具/',
              children: [
                '1. 选择修订版本',
                '2. 交互式暂存',
                '3. 储藏与清理',
                '4. 签署工作',
                '5. 搜索',
                '6. 重写历史',
                '7. 重置揭秘',
                '8. Rerere',
                '9. 使用 Git 调试',
                '10. 子模块',
                '11. 打包',
                '12. 替换',
                '13. 凭证存储'
              ]
            },
            {
              title: '定制 Git',
              prefix: '定制 Git/',
              children: ['1. Git 配置', '2. Git 属性', '3. Git 钩子', '4. Git 强制策略示例']
            },
            {
              title: 'Git 与其他系统',
              prefix: 'Git 与其他系统/',
              children: ['1. 作为客户端的 Git', '2. 迁移到 Git']
            },
            {
              title: 'Git 内部原理',
              prefix: 'Git 内部原理/',
              children: [
                '1. 底层命令和高层命令',
                '2. Git 对象',
                '3. Git 引用',
                '4. 包文件',
                '5. 引用规范',
                '6. 传输协议',
                '7. 维护与数据恢复',
                '8. 环境变量'
              ]
            },
            {
              title: 'GitOps',
              prefix: 'GitOps/',
              children: ['1. 什么是 GitOps', '2. 代码评审平台的搭建与使用', '3. 与 Jenkins ,  Nexus ,  Ansible 等整合']
            }
          ]
        }
      ],

      '/story/': [
        {
          title: '开源故事', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 2
          prefix: 'stories/',
          children: [
            '雪山凌狐的开源故事',
            '众里寻她千百度之DolphinScheduler',
            '轻编程与CRMEB打通版的故事',
            'DolphinScheduler如何带领我走进开源的世界',
            '“我的一剂良药”之开源指北',
            '要懂得舍得的UMS与JPA的故事',
            '开源有魔力-DolphinScheduler和我的开源历程',
            '感谢Apache DolphinScheduler，让我的青春永不褪色',
            '向微软官方贡献 @types 包',
            '开源社区实习记 - 我把 openEuler 移植到了 Windows WSL'
          ]
        }
      ],

      author: '开源指北编写小组',

      blog: {
        intro: '/intro/',
        sidebarDisplay: 'mobile',
        links: {
          Gitee: 'https://gitee.com/gitee-community/opensource-guide'
        }
      },

      copyright: {
        status: 'global'
      },

      footer: {
        display: true,
        content: '开源指北采用 CC-BY-SA-4.0 进行许可 | 感谢每一位参与的开发者'
      },

      mdEnhance: {
        // please only enable the features you need
        enableAll: true,
        presentation: {
          plugins: ['highlight', 'math', 'search', 'notes', 'zoom', 'anything', 'audio', 'chalkboard']
        }
      },
      repo: 'https://gitee.com/gitee-community/opensource-guide',
      repoLabel: 'Gitee',
      repoDisplay: true,
      editLinks: false
    },
    pwa: {
      favicon: '/favicon.ico',
      apple: {
        icon: '/opensource-guide/assets/icon/apple-icon-152.png',
        statusBarColor: 'black'
      },
      msTile: {
        image: '/opensource-guide/assets/icon/ms-icon-144.png',
        color: '#ffffff'
      },
      manifest: {
        icons: [
          {
            src: '/opensource-guide/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/opensource-guide/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/opensource-guide/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/opensource-guide/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            name: 'Guide',
            short_name: 'Guide',
            url: '/guide/',
            icons: [
              {
                src: '/opensource-guide/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png'
              },
              {
                src: '/opensource-guide/assets/icon/guide-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png'
              }
            ]
          }
        ]
      },
      maxSize: 6,
      cachePic: false
    },
    pageInfo: ['Author', 'Time', 'Category', 'Tag', 'ReadTime'],
    photoSwipe: false
  }
});
