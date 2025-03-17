import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#home'>Rakesh</a>
        
        {/* Toggle Button for Mobile */}
        <button 
          className='navbar-toggler' 
          type='button' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Collapsible Navbar */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><a href='#home' className='nav-link'>Home</a></li>
            <li className='nav-item'><a href='#about' className='nav-link'>About</a></li>
            <li className='nav-item'><a href='#skills' className='nav-link'>Skills</a></li>
            <li className='nav-item'><a href='#projects' className='nav-link'>Projects</a></li>
            <li className='nav-item'><a href='#contact' className='nav-link'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
