import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import 'normalize.css'
import '@/styles/globals.css'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
