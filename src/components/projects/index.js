import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import './projects.css'


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
                            projectNumber
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
                                <Link className='project__link' to={`/project/${edge.node.slug}`}><span>View More</span></Link>
                            </div>
                        <div>
                                <img className='project__image' src={edge.node.featuredImage.fluid.src} alt=''/>
                        </div>
                    </div>
                    </div>
                    <div className='project__pagination'>
                        <div><p className='project__number'>Featured Project • {edge.node.projectNumber} / 4</p></div>
                        <div className="project__arrow"></div>
                        
                   </div>
                   </div>
               ))}
           </div>
       )}
       />
)

