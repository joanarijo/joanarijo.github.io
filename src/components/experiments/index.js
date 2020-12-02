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
                            subTitle
                            demoLink
                            githubLink
                            featuredImage {
                                fluid(maxWidth: 965, quality: 100) {
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
                    <div className='experiment__contentwrap'>
                        <h2 className='experiment__title'>{edge.node.title}</h2>
                        <h3 className='experiment__subtitle'>{edge.node.subTitle}</h3>
                        <ul>
                            <li><a className='experiment__link' href={edge.node.githubLink} target="_blank" rel="noopener noreferrer" >Code</a></li>
                            <li>•</li>
                            <li><a className='experiment__link' href={edge.node.demoLink} target="_blank" rel="noopener noreferrer" >Demo</a></li>
                        </ul>
                    </div>
                </figcaption>
                </figure>
                </article>
                
                   
               ))}
               </div>
               
           </div>
       )}
       />
)

