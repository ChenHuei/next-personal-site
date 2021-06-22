import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine, faGithub } from '@fortawesome/free-brands-svg-icons'
import { ContactItem } from '@/types/footer'

export const FOOTER_ITEMS: ContactItem[] = [
  {
    url: 'https://www.facebook.com/aaa830714',
    icon: faFacebook,
    target: '_blank'
  },
  {
    url: 'https://line.me/ti/p/UGvZHai6ji',
    icon: faLine,
    target: '_blank'
  },
  {
    url: 'mailto:aaa830714@gmail.com',
    icon: faEnvelope,
    target: ''
  },
  {
    url: 'https://github.com/ChenHuei',
    icon: faGithub,
    target: '_blank'
  }
]
