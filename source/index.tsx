import React, { } from "react"
import { createRoot } from "react-dom/client"

import Server from "./server"

const clientPage = document.getElementById("client-page") as HTMLElement
const clientRoot = createRoot(clientPage)

clientRoot.render(<Server />)