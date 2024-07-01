import '@/assets/styles/styles.css'
import '@/assets/styles/global.css'
import { StoreProvider } from '@/utils/Store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }) {
  return (
      <StoreProvider>
        <Component {...pageProps} /> 
        <ToastContainer />
      </StoreProvider>
  )
}