import React from "react"
import "../styles/index.scss"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import News from "../components/News/news"
import SEO from "../components/Seo/seo"
import CompanySummary from "../components/CompanySummary/companySummary"
import ServiceSummary from "../components/ServiceSummary/serviceSummary"
import RecruitSummary from "../components/RecruitSummary/recruitSummary"

export default function Home() {
  return (
    <Layout>
      <SEO title="" description="" />
      <Hero />
      {/* <div className="blank"></div> */}
      <News />
      <CompanySummary />
      <ServiceSummary />
      <RecruitSummary />
    </Layout>
  )
}
