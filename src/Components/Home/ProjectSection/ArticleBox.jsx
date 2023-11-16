import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBox = ({link, image, altText, title}) => {
  return (
    <Link to={link}>
        <img src={image} alt={altText} />
        <h3>{title}</h3>
        <div className="readmore">Read more<i className="fa-solid fa-arrow-up-right"></i></div>                                      
    </Link>                
  )
}

export default ArticleBox