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
            
            <SEO title={props.data.contentfulProject.seoTitle} description={props.data.contentfulProject.seoDescription} keywords={props.data.contentfulProject.seoKeywords} className='noanimation__scroll' />
            <Nav />
            <div className="post">
                <div className="post__wrap">
                    <img className='post__hero' src={props.data.contentfulProject.heroImage.fluid.src} alt='hero'/>

                    <div className="post__info">

                        <div className="post__categories">
                            <h2 className="categories__title"><pre>&lt;/></pre></h2>
                            {props.data.contentfulProject.category.map(category => (
                            <p className="categories__languages">{category.title}</p>
                            ))}
                        </div>

                        <div className="post__content">
                                <h1 className="content__title">{props.data.contentfulProject.title}</h1>
                                <h3 className="content__subtitle">{props.data.contentfulProject.subTitle}</h3>
                                <p className="content__description" dangerouslySetInnerHTML={
                            {__html: `${props.data.contentfulProject.content.childMarkdownRemark.html}`}
                        } />
                            <div className="content__links">
                                <a href={`${props.data.contentfulProject.githubLink}`} target="_blank" rel="noopener noreferrer" className='about__link'><span>Code</span></a> • 
                                <a href={`${props.data.contentfulProject.demoLink}`} target="_blank" rel="noopener noreferrer" className='about__link'><span>Demo</span></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </Layout>
        
    )
}

export default ProjectTemplate;

export const query = graphql`
    query ($id: String!) {
        contentfulProject(id: {eq: $id}){
            id
            slug
            title
            subTitle
            content {
                childMarkdownRemark {
                    html
                }
            }
            category {
                title
                id
            }
            githubLink
            demoLink
            seoTitle
            seoDescription
            seoKeywords
            seoImage {
                fluid(maxWidth: 1200, quality: 100) {
                    src
                    ...GatsbyContentfulFluid
                }
            }
            heroImage {
                fluid(maxWidth: 1200, quality: 100) {
                    src
                    ...GatsbyContentfulFluid
                }
            }

        }
    }
    `