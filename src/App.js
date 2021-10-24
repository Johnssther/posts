import React from "react";
import './styles.css'
import { Auth0Provider } from "@auth0/auth0-react"; 
import RouterApp from './Router'

export default function App() {
  return (
    <Auth0Provider 
        domain="dev-mabpk9kb.us.auth0.com" 
        clientId="xR96AsRgCYlvkJrTwY08SWX6r1N8E3Pa" 
        redirectUri={window.location.origin}
    >
        <RouterApp />
    </Auth0Provider>
  );
}