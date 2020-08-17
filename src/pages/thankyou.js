import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../components/contact/contact.css';

const Thankyou = () => (
  <Layout>
    
    <SEO title="Contact - Thank You" />
    <Nav />
    <div className='thankyou'>
        <h1 className='thankyou__title'>Thank you!</h1>
        <p className='thankyou__subtitle'>I'll contact you as soon as possible.</p>
    </div>
    <Footer />
  </Layout>
)

export default Thankyou
