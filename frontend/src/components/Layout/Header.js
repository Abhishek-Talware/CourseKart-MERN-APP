import React from 'react'
// import {IoBookSharp} from 'react-icons/io'
import { NavLink,Link } from 'react-router-dom'
import {BookBookmark} from 'phosphor-react'
const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to='/' className="navbar-brand" href="#">
        <BookBookmark size={32} /> CourseKart
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/register' className="nav-link" href="#">SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link" href="#">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/cart' className="nav-link" href="#">Cart (0)</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header