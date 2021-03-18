import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import "./recruitIndex.scss";

const recruitIndex = () => {
  return (
    <section id="recruit-index-area">
      <h2>採用情報</h2>
      <div className="float-text">
        <p>Recruit</p>
      </div>
      <div className="grid-wrapper">
        <ul className="recruit-items">
          <li className="recruit-item">
            <h3>開発部門</h3>
            <p>開発業務を行います</p>
            <div className="item-float-icon">
              <FaArrowCircleRight />
            </div>
          </li>
          <li className="recruit-item">
            <h3>商品開発</h3>
            <p>マーケティング含めた商品の開発を行います</p>
            <div className="item-float-icon">
              <FaArrowCircleRight />
            </div>
          </li>
          <li className="recruit-item">
            <h3>総務部</h3>
            <p>バックボーンの仕組みづくりを行います</p>
            <div className="item-float-icon">
              <FaArrowCircleRight />
            </div>
          </li>
          <li className="recruit-item">
            <h3>営業部門</h3>
            <p>営業活動を行います</p>
            <div className="item-float-icon">
              <FaArrowCircleRight />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default recruitIndex
