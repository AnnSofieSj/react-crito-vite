import React from 'react'

const HeadlineBox = ({icon, title, description}) => {
  return (
        <div className="headline">
            <div className="icon"><i className={icon}></i></div>                        
            <div className="text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>  
    )
}

export default HeadlineBox