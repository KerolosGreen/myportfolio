import './Home.css'
import Work from '../Work/Work'
function Home(){
    return(
        <div className='Home'>
            
            <img data-aos="fade-down" data-aos-delay="150" data-aos-once="true" className='gifball' src='../../public%20assets/circle.gif'/>
            <h1 data-aos="fade-right" data-aos-delay="150" data-aos-once="true">Hi , I'm Kerolos Safwat</h1>
            <p data-aos="fade-left" data-aos-delay="150" data-aos-once="true">And This Is My Portfolio</p>
            <button data-aos="zoom-out" data-aos-delay="150" data-aos-once="true" className='resume-button'>My Resume</button>
            <Work/>
        </div>
    )
}
export default Home