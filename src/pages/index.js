import React from "react"
import Hero from '../components/hero';
import Projects from '../components/projects';
import Experiments from '../components/experiments';
import About from '../components/about';
import Contact from '../components/contact';
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `developer`, `front-end`]}/>
    <Hero />
    <Projects />
    <Experiments />
    <About />
    <Contact />
  </Layout>

)

export default IndexPage
