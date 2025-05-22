import { getAllArticles } from "../services/api";
import { useState, useEffect } from "react";
import "../css/ArticleCard.css"
import {Link} from 'react-router-dom';

function ArticleCard({ article, sport }) {
  const link = article.links.api.self.href.split('/').pop();
  return (
    <>
      <div className="container">
        <div className="card mb-3" >
          <div className="card-header">
            {article.type}
          </div>
          <img className="card-img-top img-fluid hero" src={article.images[0].url} alt="Card image cap"/>
          <div className="card-body">
            <Link className="card-title" to={`/${sport}/article/${link}`} >{article.headline}</Link>
            <p className="card-text">{article.description}</p>
            <p className="card-text"><small className="text-muted">{`Last Updated: ${article.lastModified}`}</small></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleCard;