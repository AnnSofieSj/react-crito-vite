import React, { useEffect, useState } from 'react'
import SectionTitle from '../Generics/SectionTitle'
import './NewsArticleSection.css'
import { Link } from 'react-router-dom'

const NewsArticleSection = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {        
        getArticles()        
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')   
        
        if (result.status === 200)
            setArticles(await result.json())
    }


  return (
    <section className="news-article">
        <div className="container">
            <div className="section-top">
                <SectionTitle title="" text="Our News & Articles"/>    
            </div>
            <div className="articles">
                {articles.map(article => (                    
                    <Link to={`/news/${article.id}`} className="article" key={article.id}>
                        <img src={article.imageUrl} alt={article.title} />
                        <p>{article.category}</p>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </Link>                            
                ))}
            </div>            
        </div>
    </section>
  )
}

export default NewsArticleSection