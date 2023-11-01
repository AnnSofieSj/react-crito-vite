import React from 'react'

const Button = ({type, text, url}) => {

  const getButtonClassName = () => {
    switch(type) {
      case 'yellow':
        return 'btn-yellow'
      case 'black':
        return 'btn-black'
      default:
        return 'btn-transparent'
    }
  }

  return (
    <a className={getButtonClassName()} href={url}>
        {text}
        <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  )
}

export default Button