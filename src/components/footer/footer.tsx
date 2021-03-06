import { ContactItem } from '@/types/footer'
import {
  FooterWrapper,
  FooterTitle,
  FooterContactList,
  FooterContactItem,
  FooterContactItemIcon
} from './footer.style'

export interface FooterProps {
  title: string
  list: ContactItem[]
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { list, title } = props

  return (
    <FooterWrapper>
      <FooterTitle>{title}</FooterTitle>
      <FooterContactList>
        {list.map(item => (
          <FooterContactItem
            key={item.url}
            href={item.url}
            target={item.target}
            aria-label={item.icon.toString()}
            rel="noreferrer"
          >
            <FooterContactItemIcon icon={item.icon} />
          </FooterContactItem>
        ))}
      </FooterContactList>
    </FooterWrapper>
  )
}

export default Footer
