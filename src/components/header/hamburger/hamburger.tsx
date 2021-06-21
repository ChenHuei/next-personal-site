import { HamburgerWrapper, HamburgerLine } from './hamburger.style'

export interface HamburgerProps {
  isOpen: boolean
  onClick?: () => void
}

const Hamburger: React.FC<HamburgerProps> = (props: HamburgerProps) => {
  const { isOpen, ...other } = props

  return (
    <HamburgerWrapper {...other}>
      {[...Array(3).keys()].map((_, index) => (
        <HamburgerLine key={index} isOpen={isOpen} />
      ))}
    </HamburgerWrapper>
  )
}

export default Hamburger
