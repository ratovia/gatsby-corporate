import React from "react"
import "./layout.scss"
import Footer from "../Footer/footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
