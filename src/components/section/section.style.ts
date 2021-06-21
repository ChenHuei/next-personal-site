import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding: 80px 5%;

  &:nth-of-type(2n) {
    background-color: #f9f9f9;
  }
`

export const SectionTitle = styled.h1`
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`
