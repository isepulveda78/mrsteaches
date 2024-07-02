import '@/assets/styles/styles.css'
import '@/assets/styles/global.css'
import { StoreProvider } from '@/utils/Store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider, useSession } from 'next-auth/react'

export default function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
     <SessionProvider session={session}>
       <StoreProvider>
        <Component {...pageProps} /> 
        <ToastContainer />
      </StoreProvider>
     </SessionProvider>
  )
}