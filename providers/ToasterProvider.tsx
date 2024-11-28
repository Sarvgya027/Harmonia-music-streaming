'use client'

import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: '#1e293b',
          border: '1px solid rgba(51, 65, 85, 0.3)',
          color: '#e2e8f0',
          backdropFilter: 'blur(8px)',
        },
        success: {
          iconTheme: {
            primary: '#818cf8',
            secondary: '#1e293b',
          },
        },
        error: {
          iconTheme: {
            primary: '#f87171',
            secondary: '#1e293b',
          },
        },
      }}
    />
  )
}

export default ToasterProvider
