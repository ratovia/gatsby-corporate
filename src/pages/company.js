import React from "react"
import "../styles/company.scss"
import Layout from "../components/Layout/layout"
import PageHero from "../components/PageHero/pagehero"
import Header from "../components/Header/header"
import CompanyOverView from "../components/CompanyOverView/companyOverView"
import SEO from "../components/Seo/seo"

export default function Company() {
  return (
    <Layout>
      <SEO title="" description="" />
      <Header isScrollEffect={false}/>
      <PageHero />
      <CompanyOverView />
    </Layout>
  )
}
