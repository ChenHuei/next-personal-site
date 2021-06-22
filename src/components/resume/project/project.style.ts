import styled, { css } from 'styled-components'

export const ProjectList = styled.div<{ isOdd: boolean }>`
  width: 100%;
  padding: 28px;
  text-align: ${props => (props.isOdd ? 'left' : 'right')};
`

export const ProjectItem = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
`

export const ProjectItemTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`
export const ProjectItemLink = styled.a<{ isOdd: boolean }>`
  padding: 2px 8px;
  color: #202124;
  border-radius: 2px;
  transition: 0.5s;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-color: #202124;
  }

  ${props =>
    props.isOdd
      ? css`
          margin-left: -8px;
        `
      : css`
          margin-right: -8px;
        `}
`

export const ProjectItemDescription = styled.p`
  font-size: 12px;
  color: #767676;
`
