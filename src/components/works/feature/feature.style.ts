import styled from 'styled-components'

export const FeatureTitle = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: #202124;
`

export const FeatureDescription = styled.p`
  margin: 0;
  color: #767676;
  line-height: 24px;
`

export const FeatureCode = styled.a`
  width: 160px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-top: 16px;
  color: #202124;
  border: 1px solid #767676;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #202124;
  }
`
