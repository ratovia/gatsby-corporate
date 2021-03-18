import React from "react"
import "../styles/service.scss"
import Layout from "../components/Layout/layout"
import PageHero from "../components/PageHero/pagehero"
import Header from "../components/Header/header"
import ServiceList from "../components/Service/service"
import SEO from "../components/Seo/seo"

export default function Service() {
  return (
    <Layout>
      <SEO title="" description="" />
      <Header isScrollEffect={false}/>
      <PageHero />
      <ServiceList />
    </Layout>
  )
}
