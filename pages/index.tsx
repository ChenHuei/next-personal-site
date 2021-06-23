import { useRef } from 'react'
import Head from 'next/head'

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
      <Head>
        <title>Chen Huei</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Chen Huei"></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Introduction of Chen Huei" />
        <meta property="og:description" content="Chen Huei" />
        <meta property="og:image" content="/public/cover.jpg" />
        <meta property="og:url" content="https://next-personal-site-alpha.vercel.app/" />
        <meta property="og:site_name" content="Chen Huei" />
      </Head>

      <Header list={HEADER_ITEMS} refs={{ about: aboutRef, resume: resumeRef, works: worksRef }} />
      <About ref={aboutRef} title="about me" {...ABOUT_INFORMATION} />
      <Resume ref={resumeRef} title="resume" list={RESUME_INFORMATION} />
      <Works ref={worksRef} title="latest works" list={WORKS_LIST} />
      <Footer title="contact me" list={FOOTER_ITEMS} />
    </HomeWrapper>
  )
}
