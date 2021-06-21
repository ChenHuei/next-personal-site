import { DesktopNavigationList, DesktopNavigationItem } from './desktop-navigation.style'
import { NavigationItem } from '@/types/header'

export interface DesktopNavigationProps {
  list: NavigationItem[]
  handleNavigate: (label: string) => void
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = (props: DesktopNavigationProps) => {
  const { list, handleNavigate } = props

  return (
    <DesktopNavigationList>
      {list.map(item => (
        <DesktopNavigationItem key={item.id} onClick={() => handleNavigate(item.label)}>
          {item.label}
        </DesktopNavigationItem>
      ))}
    </DesktopNavigationList>
  )
}

export default DesktopNavigation
