import Link from "next/link";
import InnerWrapper from "./InnerWrapper";

function Nav() {
  return (
    <div className=' mb-0 mx-0 pt-12 px-8 lg:px-12'>
      <InnerWrapper className='max-w-7xl mx-auto'>
        <div className='flex flex-row justify-between'>
          <div>
            <Link href={"/"} hrefLang='us-en'>
              <nav className='text-3xl display-inline cursor-pointer font-fields'>
                Jordan Lambrecht
              </nav>
            </Link>
          </div>
          <nav className='flex flex-row justify-end gap-x-8 relative items-end'>
            <div className='  font-bold accent-zinc-200 hover:scale-95 cursor-pointer'>
              <Link href={"/"} className='relative inline-block cursor-pointer'>
                <span>Main</span>
              </Link>
            </div>
          </nav>
        </div>
      </InnerWrapper>
    </div>
  );
}

export default Nav;
