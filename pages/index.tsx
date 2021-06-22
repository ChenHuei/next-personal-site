import styled from 'styled-components'

// components
import Section from '@/components/section'
import Header from '@/components/header'
import Footer from '@/components/footer'

// constants
import { HEADER_ITEMS } from '@/constants/header'
import { FOOTER_ITEMS } from '@/constants/footer'

const HomeWrapper = styled.main`
  background-color: #000;
`

export default function Home() {
  return (
    <HomeWrapper>
      <Header list={HEADER_ITEMS} />
      <Section title="about me"></Section>
      <Section title="resume"></Section>
      <Section title="latest works"></Section>
      <Footer title="contact me" list={FOOTER_ITEMS} />
    </HomeWrapper>
  )
}
