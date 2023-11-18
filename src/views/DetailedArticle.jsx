import React from 'react'
import Header from '../Components/Header/Header'
import ShowcaseArticle from '../Components/NewsAndArticle/ShowcaseArticle'
import Footer from '../Components/Footer/Footer'
import DetailedArticleSection from '../Components/NewsAndArticle/DetailedArticleSection'
import ArticlesSection from '../Components/Home/ArticlesSection/ArticlesSection'

const DetailedArticle = () => {
  return (
    <>
    <Header/>
    <ShowcaseArticle/>
    <DetailedArticleSection />
    <ArticlesSection />
    <Footer/>
    </>
  )
}

export default DetailedArticle