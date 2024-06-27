import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth0Provider
      domain="dev-yowhhpnpmt6w7zcx.us.auth0.com"
      clientId="hMNchhp2ESmEOWTQawsUUkGOnxJbMcrF"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </RecoilRoot>
  </React.StrictMode>
)