import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import './projects.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default () => (
    
   <StaticQuery
       query={ graphql`
        query ProjectQuery {
            allContentfulProject(
                limit: 4
                sort: { fields: [createdAt], order: DESC}
                filter: { 
                    home: {eq: true}
                }
                ) {
                    edges {
                        node {
                            id
                            slug
                            title
                            subTitle
                            featuredImage {
                                fluid(maxWidth: 1200, quality: 100){
                                    src
                                    ...GatsbyContentfulFluid

                            }
                        }
                    }
                }

                }
        }

       `}
       
       
       render={data => (
           
        <div className='project' id='projects'>
               {data.allContentfulProject.edges.map((edge) => (

                   <div className='project__wrap' key={edge.node.id}>
                       <div className='project__structure'>
                        <div className='project__content'>
                            <div>
                                <h1 className='project__name'>{edge.node.title}</h1>
                                <p className='project__subtitle'>{edge.node.subTitle}</p>
                                <AniLink  className='project__link' cover to={`/project/${edge.node.slug}`} direction="left" bg="#fcbc19"><span>View More</span></AniLink>
                            </div>
                        <div>
                                <img className='project__image' src={edge.node.featuredImage.fluid.src} alt=''/>
                        </div>
                    </div>
                    </div>
                   </div>
               ))}
           </div>
       )}
       />
)

