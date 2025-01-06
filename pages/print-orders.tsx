import Section from "@parts/modules/InnerWrapper";
import Link from "next/link";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import Script from "next/script";

const Page_PrintOrders = () => {
  const Form = () => {
    return (
      <iframe
        data-tally-src='https://tally.so/embed/nW8ldP?alignLeft=1&transparentBackground=1&dynamicHeight=1&tallyBranding=0'
        loading='lazy'
        width='100%'
        height='1002'
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title='Print Orders'
      ></iframe>
    );
  };
  return (
    <>
      <NextSeo
        title='Print Orders | Jordan Lambrecht'
        description={`Step right up and get your prints. Prints here, get ya prints here!`}
        canonical='https://jordanlambrecht.com/print-orders'
        openGraph={{
          url: "https://jordanlambrecht.com/print-orders",
          title: "Jordan Lambrecht",
          description:
            "Step right up and get your prints. Prints here, get ya prints here!",
          images: [
            {
              url: "https://jordanlambrecht.com/img/JordanPlantStore.jpg",
              width: 1920,
              height: 1440,
              alt: "Jordan Lambrecht in Lincoln, Nebraska",
              type: "image/jpeg",
            },
          ],
          siteName: "Jordan Lambrecht",
        }}
      />
      <Script src='https://tally.so/widgets/embed.js' />
      <Section id={"print-orders"} className='w-full'>
        <h1>Print Orders@</h1>
        <div className='w-full max-w-lg mx-auto'>
          <Form />
        </div>
      </Section>
    </>
  );
};
export default Page_PrintOrders;
