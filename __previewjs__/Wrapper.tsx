import { FunctionComponent, PropsWithChildren, StrictMode } from "react"

import "@unocss/reset/antfu.css"
import "uno.css"

export const Wrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return <StrictMode>{children}</StrictMode>
}
