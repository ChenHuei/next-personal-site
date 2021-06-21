import DesktopNavigation from './desktop'
import MobileNavigation from './mobile'
import { NavigationItem } from '@/types/header'

export interface NavigationProps {
  list: NavigationItem[]
  isMobile: boolean
  handleNavigate: (label: string) => void
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const { isMobile, ...other } = props

  return <>{isMobile ? <MobileNavigation {...other} /> : <DesktopNavigation {...other} />}</>
}

export default Navigation
