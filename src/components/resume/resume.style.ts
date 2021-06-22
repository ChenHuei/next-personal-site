import styled, { css } from 'styled-components'

export const ResumeList = styled.div`
  margin-top: 64px;
`

export const ResumeItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:nth-child(odd) {
    justify-content: flex-end;
  }
`

export const ResumeItemInformation = styled.div<{ isOdd: boolean }>`
  width: 100%;
  max-width: calc(50% + 1px);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 659px) {
    max-width: 100%;
    border-left: 2px solid #767676;
    border-right: none;
  }

  ${props =>
    props.isOdd
      ? css`
          align-items: flex-end;
          border-left: 2px solid #767676;
        `
      : css`
          align-items: flex-start;
          border-right: 2px solid #767676;
        `}
`

export const ResumeItemInformationTitle = styled.h2<{ isOdd: boolean }>`
  width: 100%;
  padding: 0 28px;
  margin: -16px 0 0 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.4px;
  text-align: ${props => (props.isOdd ? 'left' : 'right')};

  @media screen and (max-width: 659px) {
    font-size: 16px;
    text-align: left;
  }
`
