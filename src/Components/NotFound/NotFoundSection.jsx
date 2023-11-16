import React from 'react'
import { NavLink } from 'react-router-dom'
import './NotFound.css'
import PageNotFound from '@Images/PageNotFound.jpg'

const NotFoundSection = () => {
  return (
    <div className="container notfound">
        <img src={PageNotFound} alt="Image of a confused man holding a sign that says 404 Page Not Found." />
        <nav className="navlink">
        <NavLink className="link" to="/">Click here to go back Home</NavLink>
        </nav>
    </div>
  )
}

export default NotFoundSection