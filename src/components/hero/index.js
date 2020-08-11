import React from 'react';
import './hero.css';
import scrollTo from 'gatsby-plugin-smoothscroll';


const Hero = () => (
        
        <div className='hero'>
            <div className='hero__quote'>
                <h1>Hello! I’m Joana,</h1>
                
                <h1>a <span className='hero--yellow'>designer</span> and <span className='hero--yellow'>developer</span></h1>
                <h1>living in Lisbon.</h1>
            </div>
            <button onClick={() => scrollTo('#projects')} className='arrow'></button>
        </div> 



)

export default Hero


