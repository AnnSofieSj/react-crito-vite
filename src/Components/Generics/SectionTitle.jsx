import React from 'react'

const SectionTitle = ({title, text}) => {
  return (
    <div className="section-title">
        <p>{title}</p>
        <h2>{text}</h2>
    </div>  )
}

export default SectionTitle