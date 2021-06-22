import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 10%;
  color: #fff;
  background-color: #000;
`

export const FooterTitle = styled.h2`
  color: color(white);
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
`

export const FooterContactList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterContactItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FooterContactItemIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
  color: #fff;
  transition: 0.5s;

  &last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.6;
  }
`
