import React from 'react'

const MemberBox = ({image, title, altText, description}) => {
  return (
    <div className="member">
        <img src={image} alt={altText} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default MemberBox