import Link from "next/link";

function Nav() {
  return (
    <div className='bg-white mb-0 mx-0 pt-12 px-8 lg:px-12'>
      <header className='max-w-7xl mx-auto'>
        <div className='flex flex-row justify-between'>
          <div>
            <Link href={"/"} hrefLang='us-en'>
              <span className='prose prose-zinc text-3xl font-semibold prose-h1 display-inline cursor-pointer'>
                Jordan Lambrecht
              </span>
            </Link>
          </div>
          <nav className='flex flex-row justify-end gap-x-8 relative items-end'>
            <div className=' prose prose-zinc  font-bold accent-zinc-200 hover:scale-95 cursor-pointer'>
              <Link href={"/"} className='relative inline-block cursor-pointer'>
                <span>Main</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Nav;
