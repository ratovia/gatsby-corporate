import React from "react"
import "../styles/recruit.scss"
import Layout from "../components/Layout/layout"
import PageHero from "../components/PageHero/pagehero"
import SEO from "../components/Seo/seo"
import Header from "../components/Header/header"
import RecruitIndex from "../components/RecruitIndex/recruitIndex"

export default function Recruit() {
  return (
    <Layout>
      <SEO title="" description="" />
      <Header isScrollEffect={false}/>
      <PageHero />
      <RecruitIndex />
    </Layout>
  )
}
