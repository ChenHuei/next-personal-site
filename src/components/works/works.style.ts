import styled from 'styled-components'

export const WorksList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WorksItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 659px) {
    flex-direction: column;
  }
`

export const WorksItemLink = styled.a`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 659px) {
    width: 100%;
  }
`

export const WorksItemInformation = styled.div`
  width: 50%;
  padding: 0 24px;
  font-size: 14px;

  @media screen and (max-width: 659px) {
    width: 100%;
    text-align: center;
  }
`

export const WorksItemInformationTitle = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #202124;
`

export const WorksItemInformationDescription = styled.p`
  margin: 8px 0 16px;
  color: #767676;
  line-height: 24px;
`
