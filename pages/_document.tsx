import { Analytics } from "@vercel/analytics/react";
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/clm0gcy.css' />
        <GoogleAnalytics />
        <Analytics />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
