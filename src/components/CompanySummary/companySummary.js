import React from 'react'
import "./companySummary.scss"

const CompanySummary = () => {
  return (
    <section className="company-summary-area">
      <div className="company-item">
        <img className="company-item__image" src="https://source.unsplash.com/collection/175083/640x360"></img>
      </div>
      <div className="company-summary-area__text">
        <h2>company</h2>
        <h5>会社概要</h5>
        <p>私達がこれまで積み上げてきた信頼と実績の証です。お客様に支えられ私たちは多くの実績を得ることができました。これからも私達はお客様のニーズに応えられるよう、努めていきます。</p>
      </div>
    </section>
  )
}

export default CompanySummary
