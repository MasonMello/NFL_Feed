import { getAllArticles } from "../services/api";
import { useState, useEffect } from "react";
import "../css/ArticleCard.css"

function ArticleCard({ article }) {
  return (
    <>
      <div className="container">
        <div className="card mb-3" >
          <div class="card-header">
            {article.type}
          </div>
          <img className="card-img-top img-fluid" src={article.images[0].url} alt="Card image cap"/>
          <div className="card-body">
            <a className="card-title" href={article.links.api.self.href} >{article.headline}</a>
            <p className="card-text">{article.description}</p>
            <p className="card-text"><small className="text-muted">{`Last Updated: ${article.lastModified}`}</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCard;