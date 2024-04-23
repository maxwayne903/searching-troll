import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-rbkydlkw1b6y7s4a.us.auth0.com"
    clientId="uzOtnKxJNQCcN9XvWcJe0y12XziUeVLR"
    authorizationParams={{
      redirectUri: window.location.origin
    }}
   >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
