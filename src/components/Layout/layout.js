import React from "react"
import "./layout.scss"
import Header from "../Header/header"
import Footer from "../Footer/footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
