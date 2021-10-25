import React from "react";
import './styles.css'
import { Auth0Provider } from "@auth0/auth0-react"; 
import RouterApp from './Router'

//redux 
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div>Cargando...</div>} persistor={persistor}>
          <Auth0Provider 
              domain="dev-mabpk9kb.us.auth0.com" 
              clientId="xR96AsRgCYlvkJrTwY08SWX6r1N8E3Pa" 
              redirectUri={window.location.origin}
          >
              <RouterApp />
          </Auth0Provider>
        </PersistGate>
      </Provider>
    </>
  );
}