import React from "react"
import Hero from '../components/hero';
import Projects from '../components/projects';
import Experiments from '../components/experiments';
import About from '../components/about';
import Contact from '../components/contact';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav';
import Footer from '../components/footer';

const IndexPage = () => (

  <Layout>
    <SEO title="Home" className='animation__scroll' keywords={[`portfolio`, `developer`, `front-end`]}/>
    <Nav />
    <Hero />
    <Projects />
    <Experiments />
    <About />
    <Contact />
    <Footer />
  </Layout>

)

export default IndexPage
