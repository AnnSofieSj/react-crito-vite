import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, description, url}) => {
  return (
<   div className="box">
        <Link to={url}>
            <div className="advice">
                <i className="fa-sharp fa-light fa-horizontal-rule"></i>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn-round"><i className="fa-light fa-arrow-right"></i></button>
            </div>
        </Link>
    </div>  )
}

export default ServiceBox