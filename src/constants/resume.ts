import { ResumeInformation } from '@/types/resume'

export const RESUME_INFORMATION: ResumeInformation[] = [
  {
    company: '雲端互動 (Cloud Interactive)',
    title: '前端工程師',
    time: '2019/09 ~ now',
    projects: [
      {
        title: '豪華郵輪集團 (Resorts World Genting)',
        description: '使用 Nuxt.js 處理 SSR，以及搭配 google sheet API 管理多國語系'
      },
      {
        title: '台塑電子商務平台',
        description: '串接台塑 API 建構 RWD 的線上交易平台'
      },
      {
        title: '安麗簡訊平台 & 直播平台',
        description: '使用 Typescript with vue-property-decorato 建構前後台系統'
      }
    ]
  },
  {
    company: '英特拉金融科技',
    title: '前端工程師',
    time: '2018/07 ~ 2019/05',
    projects: [
      {
        title: '漢堡王點餐系統',
        description: '透過 API 串接線上和線下交易(悠遊卡)，開發線上點餐系統'
      },
      {
        title: '發票管理平台',
        description: '與行政人員討論需求、規劃流程和介接藍新金流 API 開發線上發票平台'
      },
      {
        title: '特店平台',
        description: '沿用既有技術 jQuery 進行維運和開發'
      }
    ]
  },
  {
    company: 'IOH',
    title: '活動企劃',
    time: '2017/06 ~ 2018/04',
    projects: [
      {
        title: '校系影音分享 (Link)',
        description: '分享大學所學和課外活動的經驗及反思',
        link: 'https://ioh.tw/talks/%E6%B7%A1%E6%B1%9F%E8%B3%87%E7%AE%A1%E7%B3%BB-%E9%99%B3%E6%8C%AF%E8%BC%9D-zhen-huei-chen-tw-study-tku-bde'
      },
      {
        title: '全台校園演講',
        description: '曾至全台 19 所不同的高中職分享大學經歷'
      }
    ]
  },
  {
    company: '私立淡江大學',
    title: '資管系',
    time: '2012/09 ~ 2016/06',
    projects: [
      {
        title: '系學會會長',
        description: '與 13 名幹部和近 30 名的學弟妹，一同討論及舉辦約 20 場的系內外活動'
      },
      {
        title: '國際志工 (Link)',
        description: '於大學的寒暑假，遠赴至柬埔寨和泰國進行電腦和中文的教學計畫',
        link: 'https://www.youtube.com/watch?v=GiId2fo-GUI'
      }
    ]
  }
]
