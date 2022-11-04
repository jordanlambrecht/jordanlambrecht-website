import { Footer, Nav } from "@parts/modules/index";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className='flex justify-center w-full bg-white align-center min-h-screen px-8 lg:px-12 py-16'>
        {children}
      </main>
      <Footer />
    </>
  );
}
