import React from 'react';

import './footer.css';

const thisYear = new Date().getFullYear();
const Footer = () => (
  
    <footer className="footer">Made with <span className="footer--yellow">&#10084;</span> by Joana Rijo • Copyright {thisYear}</footer>
)

export default Footer