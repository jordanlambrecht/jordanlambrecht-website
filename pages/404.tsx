/* eslint-disable react/no-unescaped-entities */
import InnerWrapper from "@parts/modules/InnerWrapper"
import Section from "@parts/modules/InnerWrapper"
import { NextSeo } from "next-seo"
import { usePlausible } from "next-plausible"
import { useEffect } from "react"

const Page_404 = () => {
  const plausible = usePlausible()

  useEffect(() => {
    plausible("404-page", {
      props: {
        url: window.location.href,
        referrer: document.referrer || "None",
      },
    })
  }, [plausible])
  return (
    <>
      <NextSeo
        title='Oopsies 404 | Jordan Lambrecht'
        description={`Error 404. Something ain't right`}
      />
      <Section id='400' className=' h-auto flex flex-col justify-center'>
        <InnerWrapper>
          <h1 className='prose prose-h1 text-4xl text-center font-bold text-coral'>
            404 Error.
          </h1>
          <p className=' text-slate-700'>Somethin' ain't right, yo.</p>
        </InnerWrapper>
      </Section>
    </>
  )
}

export default Page_404
