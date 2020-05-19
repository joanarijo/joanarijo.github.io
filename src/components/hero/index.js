import React from 'react';
import './hero.css';



const Hero = () => (

    <div className='hero'>
        <div className='hero__quote'>
            <h1>Hello! I’m Joana,</h1>
            
            <h1>a <span className='hero--yellow'>designer</span> and <span className='hero--yellow'>developer</span></h1>
            <h1>living in Lisbon.</h1>
        </div>
        <div className='hero--yellow'>arrow</div>
    </div> 


)

export default Hero


