import type { AppProps } from 'next/app'

import '../../styles/globals.css'
import '../../styles/card.css'
import '../../styles/buttons.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
