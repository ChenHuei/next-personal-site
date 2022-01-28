import { WorkItem } from '@/types/works'

export const WORKS_LIST: WorkItem[] = [
  {
    name: 'Huei & Bei Money',
    description: '記帳網站',
    logo: '/works/huei-bei-money.png',
    link: 'https://huei-bei-money.vercel.app',
    features: ['vite with react-ts', 'PWA', 'Firebase API', 'Material UI 搭配 React Hook Form']
  },
  {
    name: 'Huei & Bei Wedding',
    description: '婚禮網站',
    logo: '/works/huei-bei-wedding.png',
    link: 'https://huei-bei-wedding.com',
    features: [
      'PWA',
      'Lighthouse & PageSpeed 評分 90+',
      'GSAP & ScrollMagic',
      'LINE Bot API & server-sent event 製作彈幕特效',
      'AWS amplify & route 53 建置環境 '
    ]
  },
  {
    name: '豪華郵輪集團 (網站關閉中...)',
    description: '郵輪航線訂票平台系統 (前後台)',
    logo: '/works/genting.png',
    link: 'http://genting-cruise-www-sit.cloud-softwares.com/enUS',
    features: ['Nuxt.js', 'google sheet API 管理多國語系', 'RWD & WebView']
  },
  {
    name: '台塑電子商務平台',
    description: '線上交易平台',
    logo: '/works/plastic.png',
    link: 'https://formosa-pepp-web-sit.cloud-interactive.com/login',
    features: ['與台塑後端討論及介接 API', 'google sheet API 管理多國語系', 'RWD']
  },
  {
    name: 'Scan2Pay',
    description: '串接線上支付方式',
    logo: '/works/scan2pay.png',
    link: 'https://dev.intella.co/intella#forward',
    features: ['串接行動支付 (台灣Pay、LuckyPAY、ezPay...)', '前端介面優化']
  }
  // {
  //   name: '漢堡王',
  //   description: '平板(iPad)點餐系統',
  //   logo: '/works/burger-king.png',
  //   link: 'https://dev.intella.co/order-system/#/',
  //   features: ['前後端分離設計', 'Vuex、Vuetify']
  // }
  // {
  //   name: 'Facebook Login',
  //   description: '串接 Facebook 登入 API 並取得登入者名稱及大頭貼',
  //   logo: '/works/facebook.gif',
  //   link: 'https://s.codepen.io/chenhuei/debug/dEYxZQ/LDAmdPaEaWOr',
  //   features: [
  //     '介接 Facebook Login API',
  //     '樣板練習 ( 以 Vue.js 和 SCSS 為核心 )'
  //   ]
  // },
  // {
  //   name: 'Game',
  //   description: '實作 JS 原型鍊',
  //   logo: '/works/game.gif',
  //   code: 'https://codepen.io/chenhuei/pen/eapJVV',
  //   link: 'https://s.codepen.io/chenhuei/debug/eapJVV/yoMZEWVOVKmk',
  //   features: [
  //     '以 Prototype 為基礎，搭配 jQuery 開發',
  //     '樣板練習 ( 以 Pug 和 Sass 為核心 )'
  //   ]
  // },
  // {
  //   name: '天氣盒子',
  //   description: '模擬天氣預報',
  //   logo: '/works/weather.gif',
  //   code: 'https://codepen.io/chenhuei/pen/jobOKE',
  //   link: 'https://s.codepen.io/chenhuei/debug/jobOKE/NQMzYqyByEQk',
  //   features: ['使用 SCSS 撰寫動畫特效', '製作 SVG']
  // }
]
