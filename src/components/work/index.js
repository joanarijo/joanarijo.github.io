import React from 'react'
import {graphql, navigate, StaticQuery} from 'gatsby'
import './work.css'


export default () => (
   <StaticQuery
       query={ graphql`
       query WorkQuery {
           allContentfulProject(
               limit: 6
               sort: { fields: [createdAt], order: DESC}
               filter: { home: {eq: true} }
            ) {
                edges {
                    node {
                        id
                        slug
                        title
                        category {
                            title
                            id
                        }
                        featuredImage {
                            fluid(maxWidth: 1200, quality: 85){
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
           
        <div className='project' id='project'>
               {data.allContentfulProject.edges.map(edge => (
                   <div className='project__content' onClick={() => navigate(`/project/${edge.node.slug}`)}>
                       <div className='project__image' style={{backgroundImage: `url(${edge.node.featuredImage.fluid.src})`}}>
                           <p className='project__name'>{edge.node.title}</p>
                           {edge.node.category.map(category => (
                               <p className='project__category'>#{category.title}</p>
                           ))}
                       </div>
                   </div>

               ))}
               
           </div>
       )}
       />
)

