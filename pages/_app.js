import NavbarHeader from '../components/NavbarHeader';
import NextNProgress from "nextjs-progressbar";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import toast, { Toaster } from 'react-hot-toast';

import userReducer from '../features/user'
import '../styles/globals.css'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress
      color="#AE1EED"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
      options={{ easing: "ease", speed: 500 }}
    />
    <Provider store={store}>
      <Component {...pageProps} />
      < Toaster position="top-right"
        reverseOrder={true} />
    </Provider>
  </>
}

export default MyApp
