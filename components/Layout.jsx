import Head from 'next/head'
import NavBar from './Navbar'
import Footer from './Footer'
import Script from "next/script"

export default function RootLayout({ children }) {
  return (
    <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <NavBar />
            <main className='wrapper'>{children}</main>
        <Footer />
        <Script src="/js/bootstrap.bundle.js" />
    </>
  );
}
