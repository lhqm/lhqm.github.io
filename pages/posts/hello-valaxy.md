---
title: Valaxy，我来了!
date: 2023-09-01
updated: 2023-09-01
categories: 笔记
codeHeightLimit: 50
tags:
  - valaxy
  - 笔记
top: 1
---

## 为什么选择 Valaxy

因为我懒)

## 有啥用

就像学术垃圾得有个知网来装，我的垃圾产出也得有个地方放不是）

## 站点自动化部署情况

| 节点名            | 链接地址                         | 物理地址 | 国内裸连 | 快速跳转                             |
| ----------------- | -------------------------------- |------| -------- | ------------------------------------ |
| GitHub主站        | http://lhqm.github.io            | 美国   | 不可行   | [点我跳转](http://lhqm.github.io)    |
| CloudFire全球节点 | https://lhqm-github-io.pages.dev | 日本   | 不可行   | [点我跳转]()                         |
| zeabur港区节点    | https://lhqm.zeabur.app/         | 香港   | 可行     | [点我跳转](https://lhqm.zeabur.app/) |




## 官网地址
> 哼，只是我存档用的，才不是为你方便而准备的呢！
[Valaxy官方网站](https://valaxy.site/)

## 配置
> 哼，只是我怕我项目丢了，才不是给你参考的！
```ts
import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '狐狸小窝',
  author: {
    avatar: '/fox.jpg',
    name: '离狐千慕',
  },
  favicon:"favicon.ico",
  subtitle:'木秀于林，风必摧之',
  description: '三元及第才千倾，一品当朝禄万钟。',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'https://wpa.qq.com/msgrd?v=3&uin=1229796683&site=qq&menu=yes&jumpflag=1',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/lhqm',
      icon: 'i-ri-github-line',
      color: '#09090a',
    },
    // {
    //   name: '微博',
    //   // link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   // color: '#E6162D',
    //   color: '#818183'
    // },
    // {
    //   name: '豆瓣',
    //   // link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   // color: '#007722',
    //   color: '#818183',
    // },
    // {
    //   name: '网易云音乐',
    //   // link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   // color: '#C20C0C',
    //   color: '#818183',
    // },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/68-35-55-76',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/258846963',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   // link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   // color: '#1AAD19',
    //   color: '#818183',
    // },
    // {
    //   name: 'Twitter',
    //   // link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   // color: '#1da1f2',
    //   color: '#818183',
    // },
    // {
    //   name: 'Telegram Channel',
    //   // link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   // color: '#0088CC',
    //   color: '#818183',
    // },
    {
      name: 'E-Mail',
      link: 'mailto:1229796683@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  //文本渲染选项
  frontmatter:{
    //古早文章提示
    time_warning: true,
    toc: true,
    draft: true
  },
  //代码块最大高度
  codeHeightLimit: 300,
  //允许文章加密
  encrypt:{
    enable:true
  },
  //图片中变焦
  mediumZoom:{
    enable: true
  },
//  图片懒加载
  vanillaLazyload:{
    enable: true
  },
})
```
