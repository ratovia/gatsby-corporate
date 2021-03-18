import React from 'react'
import "./companyOverView.scss";

const companyOverView = () => {
  return (
    <section id="company-overview-area">
      <h2>企業概要</h2>
      <div class="float-text">
        <p>Company</p>
      </div>
      <div class="table-wrapper">
        <table class="overview-table">
          <tr class="table-row">
            <td class="table-col table-label">商号</td>
            <td class="table-col table-data">HiSence.</td>
          </tr>
          <tr class="table-row">
            <td class="table-col table-label">所在地</td>
            <td class="table-col table-data">大阪府大阪市西区</td>
          </tr>
          <tr class="table-row">
            <td class="table-col table-label">電話番号</td>
            <td class="table-col table-data">099-999-9999</td>
          </tr>
          <tr class="table-row">
            <td class="table-col table-label">代表</td>
            <td class="table-col table-data">灰川千介</td>
          </tr>
          <tr class="table-row">
            <td class="table-col table-label">設立</td>
            <td class="table-col table-data">2021/1/1</td>
          </tr>
          <tr class="table-row">
            <td class="table-col table-label">従業員数</td>
            <td class="table-col table-data">30名</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default companyOverView
