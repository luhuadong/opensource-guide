---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 开源指北
  text: 一份给开源新手的保姆级开源百科
  tagline: 认识开源，从这里开始
  image: /logo.png
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/第一部分：初识开源/第 1 小节：什么是开源/

features:
    - title: 开源故事
      details: 听一听「过来人」们的经验和故事
      link: /story/readme
    - title: Git 教程
      details: 一份简单易懂的 Git 入门指导教程
      link: /git-tutorial/readme
    - title: 如何加入我们
      details: 和我们一起继续完善「开源指北」
      link: /joinus/readme
---

## 👋 嗨～ 欢迎来到开源的世界！

「开源指北」项目是由 Gitee 发起，邀请全体开源爱好者共同参与的**开源百科编写项目**。目前 1.0 版本已经上线，你可以通过以下两种方式阅读：

**1. 在仓库内直接阅读**

开源指北仓库链接：[https://gitee.com/gitee-community/opensource-guide](https://gitee.com/gitee-community/opensource-guide)

当然你也可以点击仓库文件列表中的不同目录和文件来阅读不同的章节，还可以在下方评论区参与讨论。

如果你想在仓库内直接阅读，那不如就从 **[什么是开源](./guide/第一部分：初识开源/第%201%20小节：什么是开源.md)** 开始吧！

**2. 在「开源指北」官方 Pages 中阅读**

我们为了让阅读体验更加友好，还给「开源指北」建立了静态页面（也就是这个网页），该页面还支持了 PWA，Android 系统的用户还可以把开源指北添加在桌面上，能够让你随时随地的阅读。

### 🧩 我们需要你的贡献

虽然「开源指北」已经完成了 1.0 版本的编写，但我们深知它还有非常大的完善空间，所以我们始终欢迎你的贡献。

错别字/标点修改、错误内容更正、内容更新、内容补充，甚至是新章节的设置，只要你有想法并通过组委会/审校专家团队的审核，我们就一起去实现它！

#### 如何贡献

可以通过提交 [Issue](https://gitee.com/gitee-community/opensource-guide/issues/new?issue%5Bassignee_id%5D=0&issue%5Bmilestone_id%5D=0) 和 PR 的方式对「开源指北」做出贡献或是提出需求，更详尽的步骤可以参考[贡献指南](https://gitee.com/gitee-community/opensource-guide/blob/master/%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97.md)。


#### 加入编写者社群

如果你想和众多开源爱好者一起聊开源，添加 Gitee 小助手（gitee2013），备注「开源指北」，拉你入群。

![Gitee 小助手微信](./images/wechat-qrcode-gitee2013.png "Gitee小助手微信.png")

### 开源寄语

特别希望更多开发者能通过开源指北对开源有更多的了解，抛弃“拿来主义”，积极拥抱开源、参与开源，为国内开源崛起贡献一份自己的力量。

—— 代立冬，Apache DolphinScheduler Committer & PPMC
***

希望开源指北能像一盏灯塔，引导更多开发者踏上开源之路！

—— 潘娟，Apache ShardingSphere 作者/贡献者、项目 PMC
***

如果你还没有找到参与开源的捷径，那么开源指北可以帮助你。如果你发现开源指北有谬误，你来修改就好了！

—— 适兕，Open Source Citizen
***

开源，善莫大焉。

—— 卫剑钒，开源“圣经”《大教堂与集市》中文版译者
***

开源无界，希望通过开源指北，推进开源知识，布道开源文化，让更多才俊加入开源社区

—— 张亮，Apache ShardingSphere 创始人

[点击查看更多开源大牛寄语](./comments/readme.md)

### 支持社区/平台

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [

  { avatar: '/partners/OSCHINA.png', name: 'OSCHINA', org: 'www.oschina.net', orgLink: 'https://www.oschina.net'},
  { avatar: '/partners/deepin.png', name: 'Deepin', org: 'www.deepin.org/zh', orgLink: 'https://www.deepin.org/zh'},
  { avatar: '/partners/juejin.png', name: '掘金', org: 'juejin.cn', orgLink: 'https://juejin.cn'},
  { avatar: '/partners/sf.png', name: 'Segmentfault', org: 'segmentfault.com', orgLink: 'https://segmentfault.com'},
  { avatar: '/partners/agora.png', name: '声网', org: 'www.agora.io/cn', orgLink: 'https://www.agora.io/cn'},
  { avatar: '/partners/getui.png', name: '个推', org: 'www.getui.com', orgLink: 'https://www.getui.com'},
  { avatar: '/partners/pingcap.png', name: 'PingCAP', org: 'pingcap.com', orgLink: 'https://pingcap.com'},
  { avatar: '/partners/finclip.png', name: 'FinClip', org: 'mp.finogeeks.com', orgLink: 'https://mp.finogeeks.com'},
  { avatar: '/partners/msup.png', name: 'Msup', org: 'www.msup.com.cn', orgLink: 'https://www.msup.com.cn'},
  { avatar: '/partners/webank.png', name: '微众开源', org: 'gitee.com/ivan185682649', orgLink: 'https://gitee.com/ivan185682649'},
  { avatar: '/partners/kaiyuanshe.png', name: '开源社', org: 'kaiyuanshe.cn', orgLink: 'https://kaiyuanshe.cn'},
  
]
</script>
