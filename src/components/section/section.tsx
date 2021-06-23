import { forwardRef, ReactNode } from 'react'
import { SectionWrapper, SectionTitle } from './section.style'

export interface SectionProps {
  title: string
  children?: ReactNode
}

const Section: React.ForwardRefRenderFunction<HTMLElement, SectionProps> = (
  props: SectionProps,
  ref
) => {
  const { title, children } = props

  return (
    <SectionWrapper ref={ref}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  )
}

export default forwardRef(Section)
