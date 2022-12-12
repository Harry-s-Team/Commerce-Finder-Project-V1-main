import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Gift Ideas" key="title"/>
        <meta property="og:description" content="Find a Special Gift this Christmas 🎄" key="description"/>
        <meta
          property="og: image"
          content="/Users/GPT3 Project/Personal-Shopper/assets/Project Photo.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


