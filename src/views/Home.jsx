import React from 'react'
import Header from '../Components/Header/Header'
import PartnerSection from '../Components/Home/PartnerSection/PartnerSection'
import FeaturesSection from '../Components/Home/FeaturesSection/FeaturesSection'
import AboutSection from '../Components/Home/AboutSection/AboutSection'
import ServiceSection from '../Components/Home/ServiceSection/ServiceSection'
import WhyUsSection from '../Components/Home/WhyUsSection/WhyUsSection'
import ProjectSection from '../Components/Home/ProjectSection/ProjectSection'
import TeamSection from '../Components/Home/TeamSection/TeamSection'
import TestimonialSection from '../Components/Home/TestimonialSection/TestimonialSection'
import ArticlesSection from '../Components/Home/ArticlesSection/ArticlesSection'
import NewsSection from '../Components/Home/NewsSection/NewsSection'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Header />
        <PartnerSection />
        <FeaturesSection />
        <AboutSection />
        <ServiceSection />
        <WhyUsSection />
        <ProjectSection />   
        {/* <TeamSection />      */}
        <TestimonialSection />
        {/* <ArticlesSection /> */}
        <NewsSection />
        <Footer />
    </>
  )
}

export default Home