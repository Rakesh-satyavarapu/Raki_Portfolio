import React from 'react'
// import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='d-flex justify-content-end p-3 align-items-center nav fixed-top'>
      <h1 className='nav-brand'>Rakesh</h1>
      <div className='ms-auto'>
      <ul className='navbar nav'>
      <li className='nav-item'><a href='#home' className='nav-link'>Home</a></li>
      <li className='nav-item'><a href='#about' className='nav-link'>About</a></li>
      <li className='nav-item'><a href='#skills' className='nav-link'>Skills</a></li>
      <li className='nav-item'><a href='#projects' className='nav-link'>Projects</a></li>
      <li className='nav-item'><a href='#contact' className='nav-link'>Contact</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav


{/* <ul className='navbar nav'>
      <li className='nav-item'><Link to={'/'} className='nav-link'>Home</Link></li>
      <li className='nav-item'><Link to={'/about'} className='nav-link'>About</Link></li>
      <li className='nav-item'><Link to={'/projects'} className='nav-link'>Projects</Link></li>
      <li className='nav-item'><Link to={'/contact'} className='nav-link'>Contact</Link></li>
      </ul> */}