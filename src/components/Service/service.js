import React from 'react'
import "./service.scss"
const service = () => {
  return (
    <section id="service-list-area">
      <h2>事業内容</h2>
      <div class="float-text">
        <p>Service</p>
      </div>
      <div class="grid-wrapper">
        <ul class="service-items">
          <li class="service-item first-item">
            <h3>マーケティング</h3>
            <p>集客と市場分析を一気通貫で行なって行きます。AIを活用した販売予測は弊社にお任せください</p>
            <div class="item-float-text">HiSence.</div>
          </li>
          <li class="service-item">
            <h3>SEO対策</h3>
            <p>ビックキーワード選定からロングテールキーワード分析までサポートします</p>
            <div class="item-float-text">HiSence.</div>
          </li>
          <li class="service-item">
            <h3>コンサルティング</h3>
            <p>教育用コンテンツに関するご相談を幅広く承っております。学習開始時から学習中の悩み相談までサポート・コンサルを秘密主義で実施いたします。</p>
            <div class="item-float-text">HiSence.</div>
          </li>
          <li class="service-item">
            <h3>リブランディング支援</h3>
            <p>御社商品の価格査定から融資、資産査定までの網羅チェックを行います。</p>
            <div class="item-float-text">HiSence.</div>
          </li>
          <li class="service-item">
            <h3>営業活動</h3>
            <p>弊社独自のネットワークを活かした販促活動と外資系を意識した卒ある行動を心がけます。</p>
            <div class="item-float-text">HiSence.</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default service
