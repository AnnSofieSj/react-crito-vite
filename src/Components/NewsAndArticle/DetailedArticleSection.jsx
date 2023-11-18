import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../../views/NotFound'
import './DetailedArticleSection.css'

const DetailedArticleSection = () => {
    const [article, setArticle] = useState (null)
    const {id} = useParams()

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200)
            setArticle(await result.json())
        }
    }


  return article ?
  (
    <div className='article-side'>
        <div className="container">
            <div className="article">
                <h3 className="title">{article.title}</h3>
                <div className="subject">{article.published} <i className="fa-duotone fa-circle"></i> {article.category} <i className="fa-duotone fa-circle"></i> {article.author}</div>
                <img src={article.imageUrl} alt="" />
                <div className="content"> {article.content} 
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
                    <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
                    <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                    <h4><i className="fa-sharp fa-solid fa-quote-left fa-flip-vertical"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
                </div>
            </div>
            <div className="right-box">
                <div className='search'>
                    <input type="text" placeholder='Type to search...' />
                </div>
                <div className='recent'>
                    <h5>Recent Posts</h5>
                    <div className='recent-box'>                    
                        <p>How To Blow Through Capital At An Incredible Rate</p>
                        <p className='date'>Jan 14, 2020</p>
                    </div>
                    <div className='recent-box'>                    
                        <p>Design Studios That Everyone Should Know About? </p>
                        <p className='date'>Jan 14, 2020</p>
                    </div>
                    <div className='recent-box'>                    
                        <p>How did we get 1M+ visitors in 30 days without anything!</p>
                        <p className='date'>Jan 14, 2020</p>
                    </div>
                    <div className='recent-box'>                    
                        <p>Figma On Figma: How We Built Our Website Design System</p>
                        <p className='date'>Jan 14, 2020</p>
                    </div>                
                </div>
                <div className='category'>
                    <h5>Categories</h5>
                    <p>Technology - 20 Posts</p>
                    <p>Freelancing - 07 Posts</p>
                    <p>Writing - 16 Posts</p>
                    <p>Marketing - 11 Posts</p>
                    <p>Business - 35 Posts</p>
                    <p>Education - 14 Posts</p>
                </div>
            </div>        
        </div>
    </div>
    
  )

  :

  (
    <> 
        <NotFound />
    </>
  )
}

export default DetailedArticleSection