import React from 'react';
import './hero.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Tilt from 'react-tilt';
import Stars from './../stars';


const Hero = () => (
        
        <div className='hero'>
            <div id="home"></div>
            <Tilt className="hero__quote Tilt" options={{ max : 35, maxGlare: 1}} >
                <div className="Tilt-inner"> 
                    <h1>Hello! I’m Joana,</h1>
                    <h1>a <span className='hero--yellow'>designer</span> and <span className='hero--yellow'>developer</span></h1>
                    <h1>living in Lisbon.</h1>
                </div>
            </Tilt>
            <button onClick={() => scrollTo('#projects')} className='arrow'></button>
            <Stars />
            
        </div> 

)

export default Hero


