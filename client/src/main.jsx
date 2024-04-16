import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import ReactPixel from "react-facebook-pixel"
// import "./output.css"

const options = {
  autoConfig: true,
  debug: false
}
//* FB Pixel
ReactPixel.init("434281552521437", options);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
