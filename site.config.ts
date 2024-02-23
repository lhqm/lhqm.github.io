import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://lhqm.github.io/',
  lang: 'zh-CN',
  title: '狐狸小窝',
  author: {
    avatar: '/fox.jpg',
    name: '离狐千慕',
    status: {
      emoji: '🥇',
      message: '这个烂崽不知道从哪偷了块金牌'
    }
  },
  favicon:"favicon.ico",
  subtitle:'木秀于林，风必摧之',
  description: '不好说不评价不知道，我只会写代码睡大觉。',
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
    toc: true
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
