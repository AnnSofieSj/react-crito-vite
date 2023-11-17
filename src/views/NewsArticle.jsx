import React from 'react'
import Header from '../Components/Header/Header'
import ShowcaseArticle from '../Components/NewsAndArticle/ShowcaseArticle'
import NewsArticleSection from '../Components/NewsAndArticle/NewsArticleSection'
import Footer from '../Components/Footer/Footer'
import NewsSection from '../Components/Home/NewsSection/NewsSection'

const NewsArticle = () => {
  return (
    <>
    <Header />
    <ShowcaseArticle />
    <NewsArticleSection />
    <NewsSection />
    <Footer />
    </>
  )
}

export default NewsArticle