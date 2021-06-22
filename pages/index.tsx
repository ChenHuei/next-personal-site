// components
import Section from '@/components/section'
import Header from '@/components/header'
import Footer from '@/components/footer'

// constants
import { HEADER_ITEMS } from '@/constants/header'
import { FOOTER_ITEMS } from '@/constants/footer'

export default function Home() {
  return (
    <main>
      <Header list={HEADER_ITEMS} />
      <Section title="about me"></Section>
      <Section title="resume"></Section>
      <Section title="latest works"></Section>
      <Footer title="contact me" list={FOOTER_ITEMS} />
    </main>
  )
}
