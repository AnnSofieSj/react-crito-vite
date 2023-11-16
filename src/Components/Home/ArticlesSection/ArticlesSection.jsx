import React, { useEffect, useState } from 'react'
import './ArticlesSection.css'
import Button from '../../Generics/Button'
import SectionTitle from '../../Generics/SectionTitle'


const ArticlesSection = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {        
        getArticles()        
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=3')   
        
        if (result.status === 200)
            setArticles(await result.json())
    }

  

  return (
    <section className="article-news">
            <div className="container">
                <div className="section-top">
                    <SectionTitle title="Article & News" text="Get Every Single Articles & News"/>                   
                    <Button type="transparent" text="Browse Articles" url=""/>
                </div>

                <div className="articles">
                    {articles.map(article => (
                        <div className="article" key={article.id}>
                            <img src={article.imageUrl} alt={article.title} />
                            <p>{article.category}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>                            
                    ))}
                </div>            
            </div>
        </section>  )
}

export default ArticlesSection