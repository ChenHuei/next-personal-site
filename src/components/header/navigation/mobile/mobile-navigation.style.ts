import styled from 'styled-components'

export const MobileNavigationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const MobileNavigationItem = styled.div`
  position: relative;
  width: 25%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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

  &:hover {
    opacity: 0.6;

    &::after {
      width: 100%;
      height: 2px;
      left: 0;
    }
  }
`
