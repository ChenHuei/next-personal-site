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

const HomeWrapper = styled.main`
  background-color: #000;
`

export default function Home() {
  return (
    <HomeWrapper>
      <Header list={HEADER_ITEMS} />
      <About title="about me" {...ABOUT_INFORMATION} />
      <Resume title="resume" list={RESUME_INFORMATION} />
      <Works title="latest works" list={WORKS_LIST} />
      <Footer title="contact me" list={FOOTER_ITEMS} />
    </HomeWrapper>
  )
}
