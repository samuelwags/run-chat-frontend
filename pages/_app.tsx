import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local';
import { Montserrat } from '@next/font/google';

const doyle = localFont({ src: './fonts/Doyle-Medium.woff2'})
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
    <style jsx global>{`
      html {
        font-family: ${montserrat.style.fontFamily};
        font-weight: 450;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: ${doyle.style.fontFamily};
      }
    `}</style>
      <Component {...pageProps} />
    </>
  )
}
