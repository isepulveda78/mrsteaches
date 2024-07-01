import Script from "next/script"
import Head from 'next/head'


export default function RootLayout({ children }) {
  return (
    <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
            <main className="wrapper">
              {children}
            </main>
        <Script src="/js/bootstrap.bundle.js" />
    </div>
  );
}
