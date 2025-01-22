  //import React from 'react'
  //import ReactDOM from 'react-dom/client'
  //import App from './components/App.jsx'

  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  

 // ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
    //  <App />
   // </React.StrictMode>,
  //)