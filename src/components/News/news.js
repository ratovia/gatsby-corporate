import React from 'react'
import "./news.scss"

const News = ({news}) => {
  return (
    <section className="news-area">
      <ul className="news-items">
        {news.slice(-4).reverse().map(edges =>
          <li className="news-item">
            <p>NEWS</p>
            <p>{new Date(edges.node.created_at).toLocaleString('ja-JP',{year:'numeric',month:'numeric',day:'numeric'})}</p>
            <p>{edges.node.title}</p>
          </li>
        )}
      </ul>
    </section>
  )
}

export default News
