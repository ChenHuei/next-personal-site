import { useRef } from 'react'
import styled from 'styled-components'

// components
import Header from '@/components/header'
import Footer from '@/components/footer'
import About from '@/components/about'
import Resume from '@/components/resume'
import Works from '@/components/works'

// constants
import { HEADER_ITEMS } from '@/constants/header'
import { FOOTER_ITEMS } from '@/constants/footer'
import { ABOUT_INFORMATION } from '@/constants/about'
import { RESUME_INFORMATION } from '@/constants/resume'
import { WORKS_LIST } from '@/constants/works'

const HomeWrapper = styled.main``

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null)
  const resumeRef = useRef<HTMLElement>(null)
  const worksRef = useRef<HTMLElement>(null)

  return (
    <HomeWrapper>
      <Header list={HEADER_ITEMS} refs={{ about: aboutRef, resume: resumeRef, works: worksRef }} />
      <About ref={aboutRef} title="about me" {...ABOUT_INFORMATION} />
      <Resume ref={resumeRef} title="resume" list={RESUME_INFORMATION} />
      <Works ref={worksRef} title="latest works" list={WORKS_LIST} />
      <Footer title="contact me" list={FOOTER_ITEMS} />
    </HomeWrapper>
  )
}
