import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Pixel Pawns: Dreams before hoes</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content="Dream your warrior and fight"/>
        <meta name="keywords" content="Ai, battle, warriors, game"/>
        <meta name="author" content="Jelon"/>
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}