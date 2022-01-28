import React from 'react';
import { Provider } from 'react-redux';
import { EcommerceScreen } from './components/ecommerce/EcommerceScreen';
import { AppBar } from './components/ui/AppBar';
import { Footer } from './components/ui/Footer';
import { store } from './store/store';

export const EcommerceApp = () => {
  return <>

    <Provider store={store}>
      <AppBar />
      <EcommerceScreen />
      <Footer />
    </Provider>
  </>
};
