import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MainApp } from "./MainApp"

import "@unocss/reset/antfu.css"
import "uno.css"

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <MainApp />
    </StrictMode>
)
