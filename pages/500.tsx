/* eslint-disable react/no-unescaped-entities */
import InnerWrapper from "@parts/modules/InnerWrapper"
import Section from "@parts/modules/InnerWrapper"
import { usePlausible } from "next-plausible"
import { NextSeo } from "next-seo"
import { useEffect } from "react"

const Page_505 = () => {
  const plausible = usePlausible()

  useEffect(() => {
    plausible("505-page", {
      props: {
        url: window.location.href,
        referrer: document.referrer || "None",
      },
    })
  }, [plausible])
  return (
    <>
      <NextSeo
        title='Oopsies 500 | Jordan Lambrecht'
        description={`Error 500. Something ain't right`}
      />
      <Section id='500' className=' h-auto flex flex-col justify-center'>
        <InnerWrapper>
          <h1 className='prose prose-h1 text-4xl text-center font-bold text-coral'>
            500 Error.
          </h1>
          <p className=' text-slate-700'>Somethin' ain't right, yo.</p>
        </InnerWrapper>
      </Section>
    </>
  )
}

export default Page_505
