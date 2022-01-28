import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { AboutInformation } from '@/types/about'

export const ABOUT_INFORMATION: AboutInformation = {
  name: '陳振輝',
  jobs: '前端工程師 (Front-End Engineer)',
  description:
    '擁有三年半前端開發經驗，熟悉 Typescript、React、Vue.js。追求簡潔易讀的程式碼，遵守 DRY 的開發概念建立易讀、高擴充性的 Component。重視團隊的合作與溝通，正在尋找一個能夠讓我穩定發揮並且不斷成長的環境。以下將更詳細說明過往經歷，非常感謝您抽空觀看，請多多指教，謝謝！',
  phone: {
    value: '0986-776-379',
    icon: faMobileAlt
  },
  email: {
    value: 'aaa830714@gmail.com',
    icon: faEnvelope
  },
  links: [
    {
      name: 'codepen',
      link: 'https://codepen.io/chenhuei/'
    },
    {
      name: 'github',
      link: 'https://github.com/ChenHuei'
    }
  ]
}
