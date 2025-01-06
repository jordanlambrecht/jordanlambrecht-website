import { Footer, Nav } from "@parts/modules/index";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className='max-w-screen overflow-hidden min-h-[calc(100vh-108px-24px)]'>
        {children}
      </main>
      <Footer />
    </>
  );
}
