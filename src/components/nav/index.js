import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import './nav.css';

const Nav = () => (

    <header className='navbar'>
        <nav className='navbar__nav'>

            <div className='navbar__logo'>
                <a href='/'><img src={logo} alt='Joana Rijo Portfolio' /></a>
            </div>
            <input id="toggle" type="checkbox"/>

<label htmlFor='toggle' className='hamburger'>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</label>

<label htmlFor='toggle' className='overlay'></label>

<nav className='nav'>
  <Link to='/#home'><span>Home</span></Link>
  <Link to='/#projects'><span>Projects</span></Link>
  <Link to='/#experiments'><span>Experiments</span></Link>
  <Link to='/#about'><span>About</span></Link>
  <Link to='/#contact'><span>Contact</span></Link>
</nav>
        </nav>
    </header>
)

export default Nav