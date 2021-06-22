import styled, { keyframes } from 'styled-components'

const ripplesAnimation = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(4);
  }
`

export const RippleWrapper = styled.div<{ isFirst: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 659px) {
    left: 1px;
  }
`

export const RippleCircle = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #767676;
  border-radius: 50%;

  &:nth-child(1) {
    animation: ${ripplesAnimation} 3s linear infinite;
  }

  &:nth-child(2) {
    animation: ${ripplesAnimation} 3s linear 0.8s infinite;
  }

  &:nth-child(3) {
    animation: ${ripplesAnimation} 3s linear 1.6s infinite;
  }
`
