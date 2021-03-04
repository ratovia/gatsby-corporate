import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li className="service">
          <a className="name" href="#">SERVICE</a>
          <ul>
            <li> <a href="#">マーケティング</a> </li>
            <li> <a href="#">アプリ・Webシステム開発</a> </li>
            <li> <a href="#">事業支援</a> </li>
            <li> <a href="#">パッケージ・プロダクト</a> </li>
            <li> <a href="#">先端技術研究</a> </li>
          </ul>
        </li>
        <li className="strength"> <a className="name" href="#">STRENGTH</a>
          <ul>
            <li> <a href="#">先端技術研究</a> </li>
            <li> <a href="#">クリエイティブ</a> </li>
            <li> <a href="#">デジタルマーケティング</a> </li>
            <li> <a href="#">企画〜設計力・大規模システム</a> </li>
            <li> <a href="#">テクニカルナレッジ</a> </li>
            <li> <a href="#">個の強み＆スキル</a> </li>
          </ul>
        </li>
        <li className="company"> <a className="name" href="#">COMPANY</a>
          <ul>
            <li> <a href="#">会社概要</a> </li>
            <li> <a href="#">アクセス</a> </li>
            <li> <a href="#">企業理念</a> </li>
            <li> <a href="#">沿革</a> </li>
            <li> <a href="#">代表メッセージ</a> </li>
            <li> <a href="#">グループ</a> </li>
          </ul>
        </li>
        <li className="recruit"> <a className="name" href="#">RECRUIT</a>
          <ul>
            <li> <a href="#">募集中の職種</a> </li>
            <li> <a href="#">開発環境</a> </li>
            <li> <a href="#">就業に関する詳細</a> </li>
            <li> <a href="#">選考の流れについて・(新卒・中途)</a> </li>
          </ul>
        </li>
        <li className="contact"> <a className="name" href="#">CONTACT</a>
          <ul>
            <li> <a href="#">サービスについて</a> </li>
            <li> <a href="#">採用について</a> </li>
            <li> <a href="#">パートナーについて</a> </li>
            <li> <a href="#">個人情報について</a> </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
