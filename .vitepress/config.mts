import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "开源指北",
    description: "一份给开源新手的保姆级开源百科",
    srcDir: 'src',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',

        nav: [
            { text: '首页', link: '/' },
            {
                text: '开源指北',
                link: '/guide/readme.md',

            },
            { text: '开源故事', link: '/story/readme' },
            { text: '编写成员', link: '/members/readme' },
            {
                text: '我也要贡献',
                items: [
                    { text: '开源指北仓库', link: 'https://gitee.com/gitee-community/opensource-guide' },
                    { text: '如何加入我们', link: '/joinus/readme' }
                ]
            }
        ],

        sidebar: {
            // 开源指北
            '/guide/': [
                {
                    text: '初识开源',
                    items: [
                        { text: '什么是开源', link: '/guide/第一部分：初识开源/第 1 小节：什么是开源' },
                        { text: '开源与个人技术成长', link: '/guide/第一部分：初识开源/第 2 小节：开源与个人技术成长' },
                        { text: '如何判断一个项目是否是开源的', link: '/guide/第一部分：初识开源/第 3 小节：如何判断一个项目是否是开源的' },
                        { text: '关于开源基金会', link: '/guide/第一部分：初识开源/第 4 小节：关于开源基金会' },
                        { text: '有关开源的常见误区', link: '/guide/第一部分：初识开源/第 5 小节：有关开源的常见误区' },
                        { text: '常见文件认识', link: '/guide/第一部分：初识开源/第 6 小节：常见文件认识' },
                        { text: '企业视角看待开源', link: '/guide/第一部分：初识开源/第 7 小节：企业视角看待开源' },
                        { text: '开源发展趋势', link: '/guide/第一部分：初识开源/第 8 小节：开源发展趋势' },
                    ]
                },
                {
                    text: '学习和使用开源项目',
                    items: [
                        { text: '如何找到适合自己学习和使用的开源项目', link: '/guide/第二部分：学习和使用开源项目/第 1 小节：如何找到适合自己学习和使用的开源项目' },
                        { text: '开源项目的源代码该怎么读', link: '/guide/第二部分：学习和使用开源项目/第 2 小节：开源项目的源代码该怎么读' },
                        { text: '认识开源许可证', link: '/guide/第二部分：学习和使用开源项目/第 3 小节：认识开源许可证' },
                        { text: '开源中的赞赏文化', link: '/guide/第二部分：学习和使用开源项目/第 4 小节：开源中的赞赏文化' },
                        { text: '如何找到最强开源项目', link: '/guide/第二部分：学习和使用开源项目/第 5 小节：如何找到最强开源项目' },
                    ]
                },
                {
                    text: '尝试参与开源',
                    items: [
                        { text: '开源项目中的不同角色', link: '/guide/第三部分：尝试参与开源/第 1 小节：开源项目中的不同角色' },
                        { text: '个人为什么要参与开源贡献', link: '/guide/第三部分：尝试参与开源/第 2 小节：个人为什么要参与开源贡献' },
                        { text: '企业为什么要参与开源', link: '/guide/第三部分：尝试参与开源/第 3 小节：企业为什么要参与开源' },
                        { text: '可以用哪些方式参与开源', link: '/guide/第三部分：尝试参与开源/第 4 小节：可以用哪些方式参与开源' },
                        { text: '如何找到适合的项目进行贡献', link: '/guide/第三部分：尝试参与开源/第 5 小节：如何找到适合的项目进行贡献' },
                        { text: '提交第一个 Issue', link: '/guide/第三部分：尝试参与开源/第 6 小节：提交第一个 Issue' },
                        { text: '提交第一个 Pull Request', link: '/guide/第三部分：尝试参与开源/第 7 小节：提交第一个 Pull Request' },
                        { text: '如何成为一个项目的核心贡献者', link: '/guide/第三部分：尝试参与开源/第 8 小节：如何成为一个项目的核心贡献者' },
                        { text: '开源项目的贡献准则和贡献者公约', link: '/guide/第三部分：尝试参与开源/第 9 小节：开源项目的贡献准则和贡献者公约' },
                    ]
                },
                {
                    text: '启动自己的开源项目',
                    items: [
                        { text: '有了开源的想法后从何开始', link: '/guide/第四部分：启动自己的开源项目/第 1 小节：有了开源的想法后从何开始' },
                        { text: '为开源项目建立良好的基础', link: '/guide/第四部分：启动自己的开源项目/第 2 小节：为开源项目建立良好的基础' },
                        { text: '开源许可证的应用', link: '/guide/第四部分：启动自己的开源项目/第 3 小节：开源许可证的应用' },
                        { text: '为自己的开源项目建立贡献准则', link: '/guide/第四部分：启动自己的开源项目/第 4 小节：为自己的开源项目建立贡献准则' },
                        { text: '开源项目的维护和管理', link: '/guide/第四部分：启动自己的开源项目/第 5 小节：开源项目的维护和管理' },
                        { text: 'CONTRIBUTING 编写', link: '/guide/第四部分：启动自己的开源项目/第 6 小节：CONTRIBUTING 编写' },
                    ]
                },
                {
                    text: '开源治理',
                    items: [
                        { text: '个人维护和建立社区，两者如何选择', link: '/guide/第五部分：开源治理/第 1 小节：个人维护和建立社区，两者如何选择' },
                        { text: '打造开源社区', link: '/guide/第五部分：开源治理/第 2 小节：打造开源社区' },
                        { text: '开源项目的常见治理架构', link: '/guide/第五部分：开源治理/第 3 小节：开源项目的常见治理架构' },
                        { text: '确保开源代码质量的几个要点', link: '/guide/第五部分：开源治理/第 4 小节：确保开源代码质量的几个要点' },
                    ]
                },
                {
                    text: '有关开源的其他问题',
                    items: [
                        { text: '怎样在本职工作和开源项目间做好平衡', link: '/guide/第六部分：其他问题/第 1 小节：怎样在本职工作和开源项目间做好平衡' },
                        { text: '关于开源项目的商业化', link: '/guide/第六部分：其他问题/第 2 小节：关于开源项目的商业化' },
                    ]
                },
            ],
            // 开源故事
            '/story/': [
                {
                    text: '开源故事',

                    items: [
                        { text: '雪山凌狐的开源故事', link: '/story/stories/雪山凌狐的开源故事' },
                        { text: '众里寻她千百度之DolphinScheduler', link: '/story/stories/众里寻她千百度之DolphinScheduler' },
                        { text: '轻编程与CRMEB打通版的故事', link: '/story/stories/轻编程与CRMEB打通版的故事' },
                        { text: 'DolphinScheduler如何带领我走进开源的世界', link: '/story/stories/DolphinScheduler如何带领我走进开源的世界' },
                        { text: '“我的一剂良药”之开源指北', link: '/story/stories/“我的一剂良药”之开源指北' },
                        { text: '要懂得舍得的UMS与JAP的故事', link: '/story/stories/要懂得舍得的UMS与JAP的故事' },
                        { text: '开源有魔力-DolphinScheduler和我的开源历程', link: '/story/stories/开源有魔力-DolphinScheduler和我的开源历程' },
                        { text: '感谢Apache DolphinScheduler，让我的青春永不褪色', link: '/story/stories/感谢Apache DolphinScheduler，让我的青春永不褪色' },
                        { text: '向微软官方贡献 @types 包', link: '/story/stories/向微软官方贡献 @types 包' },
                        { text: '开源社区实习记 - 我把 openEuler 移植到了 Windows WSL', link: '/story/stories/开源社区实习记 - 我把 openEuler 移植到了 Windows WSL' },
                    ]
                },
            ],
            '/git-tutorial/': [
                {
                    text: 'Git 入门（初级篇）',

                    items: [
                        { text: '如何安装 Git', link: '/git-tutorial/getting-started/how-to-install-git' },
                        { text: '什么是版本控制和 Git', link: '/git-tutorial/getting-started/what-is-git' },
                        { text: 'Git 的入门使用', link: '/git-tutorial/getting-started/quick-start' },
                    ]
                },
                {
                    text: 'Git 命令详解',

                    items: [
                        { text: '常用 Git 命令', link: '/git-tutorial/commands/git-commands' },
                        { text: '搭建 Git 相关命令', link: '/git-tutorial/commands/build-and-launch' },
                        { text: '分支与合并相关命令', link: '/git-tutorial/commands/branch-and-merge' },
                        { text: '使用命令操作远程仓库', link: '/git-tutorial/commands/git-repo-management' },
                    ]
                },

                {
                    text: 'Git 团队协作与管理（进阶篇）',

                    items: [
                        {
                            text: '分布式 Git',
                            items: [
                                { text: '分布式工作流程', link: '/git-tutorial/advanced/distributed-of-git/distributed-workflow' },
                                { text: '向一个项目贡献', link: '/git-tutorial/advanced/distributed-of-git/contribute-to-a-project' },
                                { text: '维护项目', link: '/git-tutorial/advanced/distributed-of-git/mainta/intro/ining-projects' },
                            ]
                        },
                        {
                            text: 'Git 工具',
                            items: [
                                { text: '选择修订版本', link: '/git-tutorial/advanced/tools/git-log' },
                                { text: '交互式暂存', link: '/git-tutorial/advanced/tools/git-interactive-stash' },
                                { text: '储藏与清理', link: '/git-tutorial/advanced/tools/stash-and-clean' },
                                { text: '签署工作', link: '/git-tutorial/advanced/tools/signed-commit' },
                                { text: '搜索', link: '/git-tutorial/advanced/tools/git-grep' },
                                { text: '重写历史', link: '/git-tutorial/advanced/tools/git-rebase' },
                                { text: '重置揭秘', link: '/git-tutorial/advanced/tools/git-reset' },
                                { text: 'Rerere', link: '/git-tutorial/advanced/tools/git-rerere' },
                                { text: '使用 Git 调试', link: '/git-tutorial/advanced/tools/git-debugging' },
                                { text: '子模块', link: '/git-tutorial/advanced/tools/git-submodule' },
                                { text: '打包', link: '/git-tutorial/advanced/tools/git-bundle' },
                                { text: '替换', link: '/git-tutorial/advanced/tools/git-replace' },
                                { text: '凭证存储', link: '/git-tutorial/advanced/tools/git-credential' },
                            ]
                        },
                        {
                            text: '定制 Git',
                            items: [
                                { text: 'Git 配置', link: '/git-tutorial/advanced/customization-of-git/git-config' },
                                { text: 'Git 属性', link: '/git-tutorial/advanced/customization-of-git/git-attributes' },
                                { text: 'Git 钩子', link: '/git-tutorial/advanced/customization-of-git/git-hooks' },
                                { text: 'Git 强制策略示例', link: '/git-tutorial/advanced/customization-of-git/git-enforced-policy-example' },
                            ]
                        },
                        {
                            text: 'Git 与其他系统',
                            items: [
                                { text: '作为 SVN 客户端的 Git', link: '/git-tutorial/advanced/other-vcs/git-and-svn' },
                                { text: '从 SVN 迁移到 Git', link: '/git-tutorial/advanced/other-vcs/migrate-svn-to-git' },
                            ]
                        },
                        {
                            text: 'Git 内部原理',
                            items: [
                                { text: '底层命令和高层命令', link: '/git-tutorial/advanced/internal-principle/plumbing-and-porcelain' },
                                { text: 'Git 对象', link: '/git-tutorial/advanced/internal-principle/blob-object' },
                                { text: 'Git 引用', link: '/git-tutorial/advanced/internal-principle/git-references' },
                                { text: '包文件', link: '/git-tutorial/advanced/internal-principle/git-files' },
                                { text: '引用规范', link: '/git-tutorial/advanced/internal-principle/reference-specification' },
                                { text: '传输协议', link: '/git-tutorial/advanced/internal-principle/transport-protocol' },
                                { text: '维护与数据恢复', link: '/git-tutorial/advanced/internal-principle/recover' },
                                { text: '环境变量', link: '/git-tutorial/advanced/internal-principle/environment-variables' },
                            ]
                        },
                        {
                            text: 'GitOps',
                            items: [
                                { text: '什么是 GitOps', link: '/git-tutorial/advanced/gitops/what-is-gitops' },
                                { text: '代码评审平台的搭建与使用', link: '/git-tutorial/advanced/gitops/code-review' },
                                { text: '与 Jenkins、Nexus、Ansible 工具等整合', link: '/git-tutorial/advanced/gitops/integrate-jenkins-nexus-ansible' },
                            ]
                        }
                    ]
                },



            ],


        },

        footer: {
            message: '开源指北 - 一份给开源新手的保姆级开源百科 - 采用 CC-BY-SA-4.0 进行许可 | 感谢每一位参与的开发者',
            copyright: 'Copyright © 2019-present OSCHINA'
        },

        socialLinks: [
            { icon: { svg: '<svg t="1692699544299" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4184" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#6D6D72" p-id="4185"></path></svg>' }, link: "https://gitee.com/gitee-community/opensource-guide", ariaLabel: 'Gitee' },
        ],

        docFooter: {
            prev: '前一页',
            next: '后一页'
        },

        lastUpdated: {
            text: '最后更新'
        },

        editLink: {
            pattern: 'https://gitee.com/gitee-community/opensource-guide/tree/master/src/:path',
            text: '为此页提供修改建议',
        },

    },

})
