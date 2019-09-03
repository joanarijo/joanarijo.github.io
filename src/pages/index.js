import React from "react"
import Nav from '../components/nav';
import Hero from '../components/hero';
import Work from '../components/work';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
