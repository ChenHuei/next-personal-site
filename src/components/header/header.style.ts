import styled from 'styled-components'
import Image from 'next/image'
import { HamburgerProps } from './hamburger/hamburger'

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 64px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: #2d3338;
`

export const Logo = styled(Image)`
  cursor: pointer;
`

export const DesktopMenu = styled.div`
  display: flex;
`

export const MobileMenu = styled.div<HamburgerProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: ${props => (props.isOpen ? 0 : '125vw')};
  top: 0;
  background-color: #202124;
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`
