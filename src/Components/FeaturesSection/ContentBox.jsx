import React from 'react'

const ContentBox = ({titel, description}) => {
  return ( 
    <div>
        <img src="images/hands.svg" alt="shaking hand" />
        <h3>{titel}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ContentBox