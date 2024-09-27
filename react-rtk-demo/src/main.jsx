import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* // Provider component uses Reactcontext under the hood and provide store to every component */}
    <Provider store={store}> 
    <App />
    </Provider>
  </StrictMode>,
)
