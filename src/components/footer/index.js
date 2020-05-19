import React from 'react';

import './footer.css';

const thisYear = new Date().getFullYear();
const Footer = () => (

    <div className="footer">Made with <span className="footer--yellow">&#10084;</span> by Joana Rijo • Copyright {thisYear}</div>
)

export default Footer