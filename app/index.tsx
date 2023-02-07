import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Main } from "./pages/Main"

import "@unocss/reset/antfu.css"
import "uno.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    }
])

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
