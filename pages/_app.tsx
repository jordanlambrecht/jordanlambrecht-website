import React from "react"
import Layout from "@layouts/layout"
import type { AppProps } from "next/app"

import PlausibleProvider from "next-plausible"
import "@/styles/globals.css"

const plausibleConfig = {
  domain: "jordanlambrecht.com",
  trackOutboundLinks: true,
  trackLocalhost: process.env.NODE_ENV !== "production",
  selfHosted: true,
  customDomain: "https://analytics.jordy.world",
  enabled: true,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider {...plausibleConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  )
}
