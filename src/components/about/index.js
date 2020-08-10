import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import "./about.css"
import ReactTypingEffect from 'react-typing-effect';
import avatar from '../../images/avatar.jpg';

export default () => (
    
  <StaticQuery
      query={ graphql`
       query WorkQuery {
          allContentfulWork(
               sort: { fields: [createdAt], order: ASC}
               ) {
                   edges {
                       node {
                           id
                           role
                           company
                           timeline
                   }
               }

               },
        
               allContentfulEducation(
                sort: { fields: [createdAt], order: ASC}
                ) {
                    edges {
                        node {
                            id
                            course
                            school
                            timeline
                    }
                }
 
                },
                allContentfulLanguage(
                  sort: { fields: [createdAt], order: ASC}
                  ) {
                      edges {
                          node {
                              id
                              list  {
                                childMarkdownRemark {
                                  html
                                }
                              }
              
                      }
                  }
   
                  },
                  allContentfulTools(
                    sort: { fields: [createdAt], order: ASC}
                    ) {
                        edges {
                            node {
                                id
                                list  {
                                  childMarkdownRemark {
                                    html
                                  }
                                }
                
                        }
                    }
     
                    }
       }

      
       


      `}

      
      
      render={data => (
    

     
       <div className='about' id='about'>
              

                  <div className='about__wrap'>
                      <div className='about__me'>
                        <div className="about__photo"><img src={avatar} alt='Joana Rijo' /></div>
                        <div className='about__info'>
                          <h1 className='about__title'>Joana Rijo</h1>
                          <h1 className='about__title about__title--yellow'><ReactTypingEffect text={[`Web Developer`, `JavaScript Developer`, `Multimedia Designer`]} speed='100' eraseDelay='200' className='hero--yellow'/></h1>  
                          <div className='about__copy'>
                            <p>A Senior Designer / Junior Developer based in Lisbon, Portugal.</p>
                            <p>I've been designing for more than 7 years. While working along with a few devs, I've developed a passion for learning new languages and building things, mostly with JavaScript. </p>
                            <p>Hobbies: Drawing. Videos Games. TV Series / Movies.</p>
                          </div>

                          <div className='about__profiles'>
                            <a href="https://www.linkedin.com/in/joana-rijo-459a9542/" target="_blank" rel="noopener noreferrer" className='about__link'><span>LinkedIn</span></a> • 
                            <a href="https://github.com/joanarijo" target="_blank" rel="noopener noreferrer" className='about__link'><span>Github</span></a> • 
                            <a href="https://codepen.io/joanarijo" target="_blank" rel="noopener noreferrer" className='about__link'><span>Codepen</span></a>
                            </div>
                        </div>
                      </div>
                      <div className='about__moreinfo'>
                        
                         <div className='about__experience'>
                           <h3>Experience</h3>
                           <div className='experience__wrap'>
                              {data.allContentfulWork.edges.map((edge) => (
                                <div key={edge.node.id}>
                                    <p className='experience__role about--yellow'>{edge.node.role}</p>
                                    <p className='experience__company'>{edge.node.company}</p>
                                    <p className='experience__timeline'>{edge.node.timeline}</p>
                                </div>
                                  ))}
                            </div>
                        </div>

                        <div className='about__education'>
                           <h3>Education</h3>
                           <div className='education__wrap'>
                              {data.allContentfulEducation.edges.map((edge) => (
                                <div key={edge.node.id}>
                                    <p className='education__course about--yellow'>{edge.node.course}</p>
                                    <p className='education__school'>{edge.node.school}</p>
                                    <p className='education__timeline'>{edge.node.timeline}</p>
                                </div>
                                  ))}
                            </div>
                        </div>

                         <div className='about__languages'>
                           <h3>Languages / Frameworks</h3>
                           <div className='languages__wrap'>
                           <div className='languages__wrap--grid'>
                              {data.allContentfulLanguage.edges.map((edge) => (
                                <div key={edge.node.id}>
                                    <div dangerouslySetInnerHTML={{ __html: edge.node.list.childMarkdownRemark.html, }} />
                                </div>
                                  ))}
                            </div>
                            </div>
                        </div>

                        <div className='about__tools'>
                           <h3>Tools</h3>
                           <div className='tools__wrap'>
                           <div className='tools__wrap--grid'>
                              {data.allContentfulTools.edges.map((edge) => (
                                <div key={edge.node.id}>
                                    <div dangerouslySetInnerHTML={{ __html: edge.node.list.childMarkdownRemark.html, }} />
                                </div>
                                  ))}
                            </div>
                            </div>
                        </div>



                      </div>
                   
                   
                  </div>
            
          </div>
          

      )}
      />
)

