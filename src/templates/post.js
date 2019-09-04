import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import './post.css';


export const postQuery = graphql`
    query($id: String!) {
        contentfulProject(id: {eq: $id}){
            title
            id
            slug
            content {
                childMarkdownRemark {
                    html
                }
            }
            seoTitle
            seoDescription
            seoKeywords
            seoImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
        }
    }
    `


export default (props) => {
    return (
        <Layout>
            <SEO title={props.data.contentfulProject.seoTitle} description={props.data.contentfulProject.seoDescription} keywords={props.data.contentfulProject.seoKeywords} />
            <Nav />
            <div className="project__hero" style={{backgroundImage: `url(${props.data.contentfulProject.featuredImage.fluid.src})`}}></div>
            <div className="project__content">
                <h1 className="project__title">{props.data.contentfulProject.title}</h1>
                <div className="project__description">
                <div dangerouslySetInnerHTML={
                        {__html: `${props.data.contentfulProject.content.childMarkdownRemark.html}`}
                    } />
                </div>
                <p className="project__categories"></p>
            </div>
        </Layout>
    )
}
