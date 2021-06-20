import React from "react"

// REST STYLE
import "./layout.css"

import { GlobalStyles } from "../../styles/globalStyles"
import Header from "./header"

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
