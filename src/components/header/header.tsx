import { RefObject, useState } from 'react'

// components
import { HeaderWrapper, Logo, DesktopMenu, MobileMenu } from './header.style'
import Navigation from './navigation'
import Hamburger from './hamburger'

// types
import { NavigationItem } from '@/types/header'

export interface HeaderProps {
  list: NavigationItem[]
  refs: {
    [key: string]: RefObject<HTMLElement>
    about: RefObject<HTMLElement>
    resume: RefObject<HTMLElement>
    works: RefObject<HTMLElement>
  }
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { list, refs } = props

  const handleNavigate = (label: string): void => {
    refs[label].current?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <HeaderWrapper>
      <Logo
        src="/logo.png"
        width={64}
        height={64}
        alt="logo"
        onClick={() => handleNavigate('about')}
      />
      <DesktopMenu>
        <Navigation list={list} isMobile={false} handleNavigate={handleNavigate} />
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} />
      </DesktopMenu>
      <MobileMenu isOpen={isOpen}>
        <Navigation list={list} isMobile={true} handleNavigate={handleNavigate} />
      </MobileMenu>
    </HeaderWrapper>
  )
}

export default Header
