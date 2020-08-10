import React from 'react';
import './contact.css';


const Contact = () => (

    <div className='contact' id='contact'>
        <div className='contact__wrap'>
            <h1 className='contact__title'>Drop me a line</h1>
            <form className='contact__form' method='post' name='contact' action='/thankyou' data-netlify='true' netlify-honeypot='bot'>
                <input type='hidden' name='form-name' value='contact' />
                <div className='field__hidden'>
                    <label>Don't fill this out</label>
                    <input name='bot' />
                </div>
                <div className='input__wrap'>
                <input type="text" name="Name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                </div>

                <textarea placeholder="Enter your message here..." required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div> 

)

export default Contact
