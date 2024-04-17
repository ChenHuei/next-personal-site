import { ResumeInformation } from '@/types/resume'

export const RESUME_INFORMATION: ResumeInformation[] = [
  {
    company: '鼎恒數位科技 (MAYO)',
    title: '資深前端工程師',
    time: '2022/06 ~ now',
    projects: [
      {
        title: '優化產品',
        description: '加入網站的 CSP 設定、安排專案的 React 升級計畫...'
      },
      {
        title: '跨國、開發團隊',
        description: '統一專案的時區設定，並依不同國家實作符合該地區法規及文化的功能'
      },
      {
        title: '面試',
        description: '參與 20 逾人的前端面試，並制定面試規範'
      }
    ]
  },
  {
    company: '香港電視購物網絡 (HKTVmall)',
    title: '前端工程師',
    time: '2021/07 ~ 2022/06',
    projects: [
      {
        title: '技術選型',
        description:
          '基於仿 APP 的產品性質，提出 ionic 取代 antd 成為新的 UI 框架提升使用者體驗，並成功落實於公司'
      },
      {
        title: 'Mentor',
        description:
          '擔任三位 front-end engineer 的 mentor，同時也負責規劃和評估其他 junior 的 React 學習狀況'
      },
      {
        title: '技術分享',
        description: '分享 Next.js 的特點(v12)、Testing 的概念與實作，以及 airbnb 的 style guide'
      },
      {
        title: '無人商店購物網站',
        description: '使用 Next.js 建立專案、負責串接第三方金流，以及調整 react-native'
      }
    ]
  },
  {
    company: '雲端互動 (Cloud Interactive)',
    title: '前端工程師',
    time: '2019/09 ~ 2021/07',
    projects: [
      {
        title: '豪華郵輪、台塑電子商務、安麗簡訊...',
        description: '使用 Nuxt.js 以及 Typescript (vue-property-decorator) 建立專案'
      }
    ]
  },
  {
    company: '英特拉金融科技',
    title: '前端工程師',
    time: '2018/07 ~ 2019/05',
    projects: [
      {
        title: '整合行動支付、漢堡王點餐系統、發票管理平台...',
        description: '使用 Vue.js 建立專案，並串接各種電子支付和發票(藍新)的 API'
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
