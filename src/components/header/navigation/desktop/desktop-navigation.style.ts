import styled from 'styled-components'

export const DesktopNavigationList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 659px) {
    display: none;
  }
`

export const DesktopNavigationItem = styled.div`
  position: relative;
  width: 96px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  margin-right: 8px;
  color: #fff;
  font-weight: 500;
  transition: 0.5s;
  opacity: 0.6;
  cursor: pointer;
  text-transform: capitalize;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 0;
    height: 0;
    background-color: #fff;
    transition: 0.5s;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 1;

    &::after {
      width: 100%;
      height: 2px;
      left: 0;
    }
  }
`
