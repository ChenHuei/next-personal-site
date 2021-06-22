import styled from 'styled-components'
import { HamburgerProps } from './hamburger'

export const HamburgerWrapper = styled.div`
  display: none;
  position: fixed;
  top: 16px;
  right: 10%;
  width: 45px;
  height: 30px;
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  z-index: 10;

  @media screen and (max-width: 659px) {
    display: block;
  }
`

export const HamburgerLine = styled.div<HamburgerProps>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: #fff;
  border-radius: 4px;
  opacity: 1;
  transform-origin: left center;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${props => (props.isOpen ? '-3px' : 0)};
    left: ${props => props.isOpen && '8px'};
    transform: ${props => props.isOpen && 'rotate(45deg)'};
  }

  &:nth-child(2) {
    top: 12px;
    width: ${props => props.isOpen && 0};
    opacity: ${props => props.isOpen && 0};
  }

  &:nth-child(3) {
    top: ${props => (props.isOpen ? '29px' : '24px')};
    left: ${props => props.isOpen && '8px'};
    transform: ${props => props.isOpen && 'rotate(-45deg)'};
  }
`
