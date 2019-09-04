import React from 'react';
import './hero.css';
import ReactTypingEffect from 'react-typing-effect';




const Hero = () => (
    
    <div className='hero'>
        <div className='hero__quote'>
            <h1>Hello :)</h1>
            <h1>I’m Joana, a <ReactTypingEffect text={[`web developer`, `multimedia designer`]} speed='200' eraseDelay='1000' className='hero--white'/></h1> 
            <h1>living in Lisbon, currently working for Caseking Portugal.</h1>
        </div>
    </div> 


)

export default Hero

