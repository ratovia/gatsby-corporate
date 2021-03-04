import React from 'react'
import "./serviceSummary.scss"

const ServiceSummary = () => {
  return (
    <section className="service-summary-area">
      <div className="service-summary-area__text">
        <h2>Service</h2>
        <h5>事業内容</h5>
        <p>私達がこれまで積み上げてきた信頼と実績の証です。お客様に支えられ私たちは多くの実績を得ることができました。これからも私達はお客様のニーズに応えられるよう、努めていきます。</p>
      </div>
      <div className="service-summary-area__list">
        <ul className="service-items">
          <a>
            <li className="service-item">
              <img className="service-item__image" src="https://source.unsplash.com/collection/175083/640x360"></img>
              <div className="service-item__text">
                <h3>マーケティング</h3>
                <p>顧客の課題を解決します</p>
                <p className="more-btn">more</p>
              </div>
            </li>
          </a>
          <a>
            <li className="service-item">
              <img className="service-item__image" src="https://source.unsplash.com/collection/175083/640x360"></img>
              <div className="service-item__text">
                <h3>マーケティング</h3>
                <p>顧客の課題を解決します</p>
                <p className="more-btn">more</p>
              </div>
            </li>
          </a>
          <a>
            <li className="service-item">
              <img className="service-item__image" src="https://source.unsplash.com/collection/175083/640x360"></img>
              <div className="service-item__text">
                <h3>マーケティング</h3>
                <p>顧客の課題を解決します</p>
                <p className="more-btn">more</p>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </section>
  )
}

export default ServiceSummary
