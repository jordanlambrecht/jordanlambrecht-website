import "./styles/globals.css"
import "./styles/typography.css"
import React from "react"
import Layout from "@layouts/layout"
import localFont from "next/font/local"
import PlausibleProvider from "next-plausible"
const fields = localFont({
  src: [
    {
      path: "/fonts/fields/Fields-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/fields/Fields-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/fields/Fields-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/fields/Fields-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/fields/Fields-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fields",
})
const quasimoda = localFont({
  src: [
    {
      path: "/fonts/quasimoda/Quasimoda-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/quasimoda/Quasimoda-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/quasimoda/Quasimoda-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/quasimoda/Quasimoda-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/quasimoda/Quasimoda-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "fonts/quasimoda/Quasimoda-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-quasimoda",
})

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
