import { ReactNode } from 'react'
import { SectionWrapper, SectionTitle } from './section.style'

export interface SectionProps {
  title: string
  children?: ReactNode
}

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  const { title, children } = props

  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  )
}

export default Section
