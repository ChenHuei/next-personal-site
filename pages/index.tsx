import styled from 'styled-components'

// components
import Section from '@/components/section'
import Header from '@/components/header'
import Footer from '@/components/footer'
import About from '@/components/about'

// constants
import { HEADER_ITEMS } from '@/constants/header'
import { FOOTER_ITEMS } from '@/constants/footer'
import { ABOUT_INFORMATION } from '@/constants/about'

const HomeWrapper = styled.main`
  background-color: #000;
`

export default function Home() {
  return (
    <HomeWrapper>
      <Header list={HEADER_ITEMS} />
      <About title="about me" {...ABOUT_INFORMATION} />
      <Section title="resume"></Section>
      <Section title="latest works"></Section>
      <Footer title="contact me" list={FOOTER_ITEMS} />
    </HomeWrapper>
  )
}
