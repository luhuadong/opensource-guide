---
title: DolphinScheduler 如何带领我走进开源的世界
author: chenxingchun
date: 2021-01-21
permalink: /story/chenxingchun
---

## 摘要

Apache DolphinScheduler 目前是 Apache 孵化项目，目前正在快速发展中。加入 Apache DolphinScheduler 社区已一年多，已有 400+ 公司在生产上使用，代码+文档贡献者近 200 位，社区用户4000 多人。本篇文章主要介绍我在 Apache DolphinScheduler 的经历及收获。

## 个人简介

陈兴春，易观数科大数据平台测试工程师，Apache DolphinScheduler 的一名 Commiter，拥有5年测试经验，平常主要负责千帆产品和 DS 的测试工作，喜欢专研新技术，对未知事物充满好奇心的一枚萌妹子。


## Apache DolphinScheduler 简述

Apache DolphinScheduler 是一个开源的分布式去中心化、易扩展的可视化 DAG 大数据调度系统。于2017年在易观数科立项，2019年3月开源，于2019年8月29日通过 Apache 基金会投票正式成为 Apache 孵化器项目。

Apache DolphinScheduler 致力于解决数据处理流程中错综复杂的依赖关系，使调度系统在数据处理流程中开箱即用。可调度 Shell、Python、SQL、数据存储、Spark、Flink、MR、HTTP、子流程、依赖、条件判断等任务，DAG 可视化，支持自定义时间调度、历史数据补数、指定单个任务运行、任务/资源监控、重跑、停止、暂停、失败重试、恢复失败、恢复运行、告警、容错、全局参数、自定义参数、系统内置参数等功能。


## 结缘 Apache DolphinScheduler

2019年9月，我非常荣幸的加入易观数科，同时也加入了 Apache DolphinScheduler 社区，开始了与 DolphinScheduler 的成长之旅。DolphinScheduler 是我参加的第一个开源项目，也正是 Apache DolphinScheduler 社区，让我知道中国开源正在崛起，中国开源的力量在壮大，越来越多的开发者及公司正在积极的拥抱开源。

## 入选 commiter 之路

初入 DolphinScheduler 社区时，@dailidong 冬哥说了一句让我至今也印象深刻的话：兴春，争取早日成为 commiter。当时的我是不相信自己能成为 commiter 的，因为我不是开发，感觉没机会提交 pr，何谈成为 commiter。但是后面了解到成为 commiter，不仅只有提交 pr 一条道路，只要为社区贡献一份力量，问题答疑、贡献文章、文档、社区运营宣传，都有机会成为 commiter。

前期在 @qiaozhanwei 占卫（DolphinScheduler PPMC）的帮助下，细心的帮我讲解 DolphinScheduler 业务、架构、部署以及各个服务之间的实现与联系，加上自己对 Linux、Shell 脚本、Python、数据库及代码部署等有较好的基础，因此在短时间内就熟练的掌握 DolphinScheduler 并开始接管测试工作，把控 DolphinScheduler 每次发版质量的最后一道关卡。平时除了测试 DolphinScheduler 的业务，开始在社区进行答疑，处理 GitHub上的 issue，修改官网的文档。在测试 V1.1.0 到 V1.2.0 升级脚本时，发现 install.sh 中数据库类型为 postgresql 时，数据库连接却用的 mysql，因此我的第一个 pr 产生了，哪怕只是改了一个简单的 mysql，却是一个里程碑的开始，因为无数的 pr 及勇气都是第一个 pr 奠定的基石。后期经过不断的贡献与坚持，终于赶上第二批 commiter 的选拔，并成功入选成为 DolphinScheduler 的 commiter。

当然，成为 commiter 不应该是加入开源项目的终极目标。成为 commiter，拥有更大的操作权限，能更方便、更快捷的服务社区，同时对于项目及社区的发展与壮大，更多了一份责任，只有项目变强且被更多人及公司认可时，commiter 的头衔才会变得更有意义。

## 社区氛围

社区最近多次在线上讨论 master 重构，经过几次会议后，加入讨论的社区人员越来越多，大家各抒己见，讨论技术实现的利与弊。作为一个测试人员，也许我不能提出专业的技术建议，也许整场会议我没有发言，但是我从不会缺席。在技术讨论过程中，我会关注开发的实现方式和逻辑，在后期测试的时候，我才能发现更多隐藏的测试点以及容易忽视的细节。

在 DolphinScheduler 社区，认识了很多大神，每天都在进行大脑风暴，讨论技术、架构及需求实现。他们利用自己休闲娱乐的时间，不断的为 DolphinScheduler 出谋划策，完善 DolphinScheduler 的功能，解决 GitHub 上的 issue。在他们身上，总能学到很多东西，不仅是在技术层面，更重要的是那份为了开源项目无私奉献的精神。也正是大家的贡献以及社区小伙伴的认可，社区用户群从当初的1个群增加到 8 个群，外加 2 个开发群，而且还在不断扩大，代码 Contributors 也从当初的 1 个人增长到 148个，文档贡献者也有近 50 人了。还有一件非常值得庆贺的事情，Apache DolphinScheduler 2020年在数百个开源项目评选中脱颖而出荣获十大开源新锐项目。


## 未来期许

Apache DolphinScheduler 正在拙壮成长，希望早日毕业成为顶级项目，而且我也坚信通过社区的力量与努力，DolphinScheduler 一定会开辟出自己的一片天地，被越来越多的人熟知及应用。也希望广大同胞们的日子就如DolphinScheduler 的 slogan 一样“调度选得好、下班回家早、调度选得对、回家安心睡”。

同时，DolphinScheduler 也欢迎更多的小伙伴加入社区，加入开源的队伍，为开源贡献一份力所能及的力量！

