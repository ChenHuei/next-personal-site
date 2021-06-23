import { forwardRef } from 'react'
import Image from 'next/image'

// components
import {
  AboutWrapper,
  CoverWrapper,
  InformationWrapper,
  InformationName,
  InformationJobs,
  InformationDescription,
  InformationPhone,
  InformationEmail,
  InformationIcon,
  InformationLinkList,
  InformationLinkItem
} from './about.style'
import Section from '@/components/section'

// types
import { AboutInformation } from '@/types/about'

export interface AboutProps extends AboutInformation {
  title: string
}

const About: React.ForwardRefRenderFunction<HTMLElement, AboutProps> = (props: AboutProps, ref) => {
  const { title, name, jobs, description, phone, email, links } = props

  return (
    <Section ref={ref} title={title}>
      <AboutWrapper>
        <CoverWrapper>
          <Image src="/cover.jpg" layout="fill" objectFit="contain" alt="cover" />
        </CoverWrapper>
        <InformationWrapper>
          <InformationName>{name}</InformationName>
          <InformationJobs>{jobs}</InformationJobs>
          <InformationDescription>{description}</InformationDescription>
          <InformationPhone>
            <InformationIcon icon={phone.icon} />
            {phone.value}
          </InformationPhone>
          <InformationEmail href={`mailto:${email.value}`} rel="noreferrer">
            <InformationIcon icon={email.icon} />
            {email.value}
          </InformationEmail>
          <InformationLinkList>
            {links.map(item => (
              <InformationLinkItem
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </InformationLinkItem>
            ))}
          </InformationLinkList>
        </InformationWrapper>
      </AboutWrapper>
    </Section>
  )
}

export default forwardRef(About)
