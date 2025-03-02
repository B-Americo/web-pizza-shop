import './index.css'

import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
