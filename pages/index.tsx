// components
import Section from '@/components/section'
import Header from '@/components/header'

// constants
import { HEADER_ITEMS } from '@/constants/header'

export default function Home() {
  return (
    <main>
      <Header list={HEADER_ITEMS} />
      <Section title="about me"></Section>
      <Section title="resume"></Section>
      <Section title="latest works"></Section>
    </main>
  )
}
