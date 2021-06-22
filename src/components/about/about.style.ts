import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media screen and (max-width: 659px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CoverWrapper = styled.div`
  position: relative;
  width: 38%;
  margin-right: 4%;

  @media screen and (max-width: 659px) {
    width: 280px;
    height: 300px;
    margin-right: 0;
  }
`

export const InformationWrapper = styled.div`
  width: 58%;
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: 659px) {
    width: 100%;
    margin-top: 60px;
  }
`

export const InformationName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`

export const InformationJobs = styled.p`
  margin: 12px 0;
  color: #333;
  letter-spacing: 1px;
`

export const InformationDescription = styled.p`
  margin: 0;
  color: #767676;
  text-align: justify;
  letter-spacing: 0.2px;
`

export const InformationPhone = styled.p`
  display: flex;
  align-items: center;
  margin: 16px 0 4px;
`

export const InformationEmail = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
`

export const InformationIcon = styled(FontAwesomeIcon)`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`

export const InformationLinkList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

export const InformationLinkItem = styled.a`
  padding: 12px 24px;
  margin-right: 28px;
  border-radius: 8px;
  border: 1px solid #202124;
  color: #202124;
  transition: 0.5s;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #202124;
  }
`
