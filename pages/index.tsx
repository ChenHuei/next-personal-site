// components
import Header from '@/components/header'

// constants
import { HEADER_ITEMS } from '@/constants/header'

export default function Home() {
  return (
    <main>
      <Header list={HEADER_ITEMS} />
    </main>
  )
}
