import { forwardRef } from 'react'

// components
import {
  ResumeList,
  ResumeItem,
  ResumeItemInformation,
  ResumeItemInformationTitle
} from './resume.style'
import Ripple from './ripple'
import Project from './project'
import Section from '@/components/section'

// types
import { ResumeInformation } from '@/types/resume'

export interface ResumeProps {
  title: string
  list: ResumeInformation[]
}

const Resume: React.ForwardRefRenderFunction<HTMLElement, ResumeProps> = (
  props: ResumeProps,
  ref
) => {
  const { title, list } = props

  return (
    <Section ref={ref} title={title}>
      <ResumeList>
        {list.map((item, index) => (
          <ResumeItem key={item.company}>
            <Ripple isFirst={index === 0} />
            <ResumeItemInformation isOdd={(index + 1) % 2 === 1}>
              <ResumeItemInformationTitle isOdd={(index + 1) % 2 === 1}>
                {item.company} / {item.title} / {item.time}
              </ResumeItemInformationTitle>
              <Project list={item.projects} isOdd={(index + 1) % 2 === 1} />
            </ResumeItemInformation>
          </ResumeItem>
        ))}
      </ResumeList>
    </Section>
  )
}

export default forwardRef(Resume)
