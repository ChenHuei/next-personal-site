import { MobileNavigationList, MobileNavigationItem } from './mobile-navigation.style'
import { NavigationItem } from '@/types/header'

export interface MobileNavigationProps {
  list: NavigationItem[]
  handleNavigate: (label: string) => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = (props: MobileNavigationProps) => {
  const { list, handleNavigate } = props

  return (
    <MobileNavigationList>
      {list.map(item => (
        <MobileNavigationItem key={item.id} onClick={() => handleNavigate(item.label)}>
          {item.label}
        </MobileNavigationItem>
      ))}
    </MobileNavigationList>
  )
}

export default MobileNavigation
