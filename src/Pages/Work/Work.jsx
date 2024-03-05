import './Work.css'
import {projects} from '../../data'

function Work(){
    return(
        <>
        <div className='Work'>
            <div className='Work-description' data-aos="fade-right" data-aos-delay="100" data-aos-once="true">
                <h1>Work</h1>
                <h3>Beyond the blueprint , Explore a selection of projects where I bring ideas to life, from concept to completion.</h3>
            </div>
            <div className='Work-projects'>


                {projects.map(
                    (project)=>{
                        return(
                        <div className='Work-project' data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
                        <div className='Work-project-inside'>
                            <div className='Work-project-inside-information'>
                            <h2>{project.name}</h2>
                            <h4>{project.description}</h4>
                            <p>{project.technologies}</p>
                            </div>
                            <div className='Work-project-inside-image' style={{backgroundColor:project.image_bg}}>
                            <img src={project.image} />
                            </div>
    
                        </div>
                    </div>
                )}
                )}
                
                {/* <div className='Work-project'>
                    <div className='Work-project-inside'>
                        <div className='Work-project-inside-information'>
                        <h2>Project Name</h2>
                        <h4>Description</h4>
                        <p>React JS , MYSQL</p>
                        </div>
                        <div className='Work-project-inside-image'>
                        <img src='https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6daadbcbb9f_provider-website-p-500.png'/>
                        </div>
                    </div>
                </div> */}
                

            </div>
        </div>
        </>
    )
}
export default Work