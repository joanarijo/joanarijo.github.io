import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import './experiments.css'
import Img from 'gatsby-image'

export default () => (
    
   <StaticQuery
       query={ graphql`
            query ExperimentQuery {
            allContentfulExperiments(
                limit: 8
                sort: { fields: [createdAt], order: DESC}
                ) {
                    edges {
                        node {
                            id
                            title
                            link
                            featuredImage {
                                fluid(maxWidth: 1200, quality: 85) {
                                    ...GatsbyContentfulFluid
                                }

                        
                        }
                    }
                }

                }
            }

        `}
       
       
       render={data => (
           
        <div className='experiment' id='experiments'>
            <h1>More Projects & Experiments</h1>
            <div className='experiment__wrap'>
               {data.allContentfulExperiments.edges.map(edge => (
                   /* Featured Project */
                <article className='experiment__content' key={edge.node.id} >
                    <figure>
                    <Img 
                    key={edge.node.featuredImage.src}
                    fluid={edge.node.featuredImage.fluid} 
                    className='experiment__image' />
                <figcaption className='experiment__content--hover'>
                    <h2 className='experiment__name'>{edge.node.title}</h2>
                    <a className='experiment__link' href={edge.node.link}><span>View More</span></a>
                </figcaption>
                </figure>
                </article>

                   
               ))}
               </div>
           </div>
       )}
       />
)

