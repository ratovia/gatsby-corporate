import React from 'react'
import "./recruitSummary.scss"

const RecruitSummary = () => {
  return (
    <section className="recruit-summary-area">
      <div className="outer-box">
        <div className="inner-text">
          <h2>RECRUIT</h2>
          <h5>採用情報</h5>
          <h3>一緒に働く仲間を募集しています。</h3>
          <p>佐藤設備では人材を募集しています。入社後6ヶ月〜1年間は現場監督の補助をしながら基本を身につけることができ、技術を習得しスキルアップできる環境です。手に職をつけて、私たちと一緒に社会貢献していきませんか。</p>
          <div className="btn more-btn">more</div>
        </div>
        <div className="float-box">
          <img className="float-box__image" alt="採用情報に関する画像"src="https://source.unsplash.com/collection/175083/640x360"></img>
        </div>
      </div>
    </section>
  )
}

export default RecruitSummary
