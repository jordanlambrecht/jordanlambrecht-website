// import "./styles/typography.css"
import React from "react"
import Layout from "@layouts/layout"

import PlausibleProvider from "next-plausible"
import "./styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <PlausibleProvider
        domain='jordanlambrecht.com'
        trackOutboundLinks
        trackLocalhost={process.env.NODE_ENV !== "production"}
        selfHosted
        customDomain='https://analytics.jordy.world'
        enabled
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  )
}
