import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import './post.css';
import Footer from "../components/footer";

const ProjectTemplate = (props) => {
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
                {props.data.contentfulProject.category.map(category => (
                    <p className="project__categories">{category.title}</p>
                    ))}
            </div>
            <Footer />
        </Layout>
    )
}

export default ProjectTemplate;

export const query = graphql`
    query ($id: String!) {
        contentfulProject(id: {eq: $id}){
            title
            id
            slug
            content {
                childMarkdownRemark {
                    html
                }
            }
            category {
                title
                id
            }
            seoTitle
            seoDescription
            seoKeywords
            seoImage {
                fluid(maxWidth: 1200, quality: 100) {
                    src
                    ...GatsbyContentfulFluid
                }
            }
            featuredImage {
                fluid(maxWidth: 1200, quality: 100) {
                    src
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
    `