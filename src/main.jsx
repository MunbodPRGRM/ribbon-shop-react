import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

import CartProvider from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>

      <App />
      <Toaster

        position="top-right"

        toastOptions={{

          duration: 3000,

          style: {

            background: "#ffffff",

            color: "#374151",

            borderRadius: "16px",

            padding: "16px",

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          },

          success: {

            iconTheme: {

              primary: "#ec4899",

              secondary: "#ffffff",
            },
          },
        }}
      />

    </CartProvider>
  </StrictMode>,
)
