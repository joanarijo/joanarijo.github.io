import React from 'react';
import './contact.css';


const Contact = () => (

    <div className='contact' id='contact'>
        <div className='contact__wrap'>
            <h1 className='contact__title'>Drop me a line</h1>
            <form className='contact__form'>
                <div className='input__wrap'>
                <input type="text" name="Name" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                </div>

                <textarea placeholder="Describe your message here..."></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div> 

)

export default Contact
