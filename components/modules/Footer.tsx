/* eslint-disable react/no-unescaped-entities */
import {
  LinkedIn,
  Instagram,
  Website,
  GitHub,
  Email,
} from "@parts/elements/SocialIcon";
function Footer() {
  return (
    <footer className='bg-gray'>
      <div className='max-w-7xl py-20 mx-auto justify-between'>
        {/* <div className='bg-opacity-25 bg-gray-400 w-full h-[1px]' /> */}
        <div className='flex justify-between mt-12'>
          <div>
            <p className='text-gray-400 '>Thanks for hangin'</p>
            <span className='text-gray-400 text-md'>
              © {new Date().getFullYear()}
            </span>
          </div>
          <div className='flex gap-x-6'>
            <Instagram
              iconName={"Instagram"}
              href={"https://instagram.com/jordanlambrecht"}
            />
            <LinkedIn
              iconName={"LinkedIn"}
              href={"https://www.linkedin.com/in/jordan-lambrecht-41393a80/"}
            />
            <Website iconName={""} href={"https://pixelbakery.com"} />
            <GitHub
              iconName={"github"}
              href={"https://github.com/pixelbakery"}
            />
            <Email
              iconName={"envelope"}
              href={"mailto:jordan@pixelbakery.com"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
