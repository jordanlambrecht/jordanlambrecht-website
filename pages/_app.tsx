import "../styles/globals.css";
import "../styles/typography.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Layout from "@layouts/layout";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalytics trackPageViews />
      <Analytics />
    </>
  );
}
