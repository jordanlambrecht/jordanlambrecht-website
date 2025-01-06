import Image from "next/image";
import InnerWrapper from "@parts/modules/InnerWrapper";
import Link from "next/link";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import Section from "@parts/modules/Section";
export default function Home() {
  return (
    <>
      <NextSeo
        title='Jordan Lambrecht'
        description={`Hi, I'm Jordan Lambrecht, a Professional Something or Another in Lincoln, Nebraska.`}
        canonical='https://jordanlambrecht.com'
        openGraph={{
          url: "https://jordanlambrecht.com",
          title: "Jordan Lambrecht",
          type: "profile",
          profile: {
            firstName: "Jordan",
            lastName: "Lambrecht",
            username: "jlambrecht265",
            gender: "male",
          },
          description:
            "Hi, I'm Jordan Lambrecht, a Professional Something or Another in Lincoln, Nebraska.",
          images: [
            {
              url: "https://jordanlambrecht.com/img/JordanPlantStore.jpg",
              width: 1920,
              height: 1440,
              alt: "Jordan Lambrecht in Lincoln Nebraska",
              type: "image/jpeg",
            },
          ],
          siteName: "Jordan Lambrecht",
        }}
        twitter={{
          handle: "@JordyJordyJordN",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <SocialProfileJsonLd
        type='Person'
        name='Jordan Lambrecht'
        url='https://jordanlambrecht.com'
        sameAs={[
          "http://www.facebook.com/jlambrecht265",
          "http://instagram.com/jordanlambrecht",
          "http://www.linkedin.com/in/jordan-lambrecht-41393a80",
          "https://twitter.com/JordyJordyJordN",
        ]}
      />
      <Section id='landing' className={""}>
        <InnerWrapper className='flex flex-col lg:flex-row gap-x-24 gap-y-16'>
          <div className='w-full lg:w-3/5'>
            <Link
              href='/img/JordanPlantStore.jpg'
              target={"_blank"}
              className={"cursor-pointer"}
            >
              <Image
                src={"/img/JordanPlantStore.jpg"}
                width={1920}
                height={1440}
                priority
                className={"cursor-pointer"}
                alt={
                  "Jordan Lambrecht at Urban Trails nursery during the pandemic."
                }
              />
            </Link>
          </div>
          <div className='w-full lg:w-2/5 '>
            <p>
              Hi, I&apos;m Jordan Lambrecht, a Professional Something or Another
              based out of Lincoln, Nebraska.
            </p>
            <p>
              Creating well-designed and personal moments that make people happy
              gets me out of bed in the morning – and keeps me up at night. As
              such, an off button is not part of my programming, be it with{" "}
              <Link href={"https://pixelbakery.com/work"}>animation</Link>,{" "}
              <Link href={"https://opeweeloped.us"}>web development</Link>, or
              any other outlet that involves making something exist that
              didn&apos;t before. When I&apos;m not staring at a computer,
              I&apos;m probably building something, killing plants, or making{" "}
              <Link
                target={"_blank"}
                href={"https://instagram.com/shitty_pots"}
              >
                shitty pots
              </Link>
              .
            </p>

            <p>
              I&apos;m the Director and Founder of{" "}
              <Link href='https://pixelbakery.com'>
                Pixel Bakery Design Studio
              </Link>{" "}
              and sit on the Board of Directors for the{" "}
              <Link href={"https://www.luxcenter.org"}>
                Lux Center for the Arts
              </Link>
              . Sometimes I host workshops, create{" "}
              <Link href={"https://pixelbakery.com/education"}>tutorials</Link>,
              and do some public speaking.
            </p>

            <p>
              I give credence to the idea that the critical components of a
              greater creative community are vulnerability, de-stigmatization of
              mental health, and equity.
            </p>

            <p>
              I believe in free and open education, treating human beings like
              humans, and empowering those not as far along on their journey as
              I am.
            </p>
            <p>I believe in you. ❤️</p>
          </div>
        </InnerWrapper>
      </Section>
      <Section id='find-me' className=' bg-zinc-400'>
        <InnerWrapper className='my-20'>
          <h2>Come Hang</h2>
        </InnerWrapper>
      </Section>
    </>
  );
}
