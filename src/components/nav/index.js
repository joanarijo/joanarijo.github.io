import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/gatsby-icon.png';
import './nav.css';

const Nav = () => (
    <nav>
        <div className='nav__items'>
            <a className='nav__item--left' href='/'><img src={logo} alt='Joana Rijo Portfolio' className='nav__item--logo'/>logo goes here</a>
           
            <Link className={window.location.href.indexOf('work') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/#project'>Work</Link>

            <Link className={window.location.href.indexOf('about') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/#contact'>About</Link>
        </div>
    </nav>
)

export default Nav