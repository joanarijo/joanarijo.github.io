import React from "react"
import Nav from '../components/nav';
import Hero from '../components/hero';
import Work from '../components/work';
import Footer from '../components/footer';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `developer`, `front-end`]}/>
    <Nav />
    <Hero />
    <Work />
    <Footer />
  </Layout>
)

export default IndexPage
