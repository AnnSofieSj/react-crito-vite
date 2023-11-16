import React from 'react'

const ContentBox = ({text, image, altText, name, description}) => {
  return (
    <div className="box">
        <div className="stars">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>            
        <p>{text}</p>
        <div className="user">
            <img src={image} alt={altText} />
            <div className="name">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ContentBox