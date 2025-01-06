import React from "react"
import Layout from "@layouts/layout"

import PlausibleProvider from "next-plausible"
import "./styles/globals.css"

const plausibleConfig = {
  domain: "jordanlambrecht.com",
  trackOutboundLinks: true,
  trackLocalhost: process.env.NODE_ENV !== "production",
  selfHosted: true,
  customDomain: "https://analytics.jordy.world",
  enabled: true,
}

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider {...plausibleConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}
