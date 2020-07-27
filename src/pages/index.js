import React from "react"
import Nav from '../components/nav';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Experiments from '../components/experiments';
import About from '../components/about';
import Footer from '../components/footer';
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `developer`, `front-end`]}/>
    <Nav />
    <Hero />
    <Projects />
    <Experiments />
    <About />
    <Footer />
  </Layout>

)

export default IndexPage
