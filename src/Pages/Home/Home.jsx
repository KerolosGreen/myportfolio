import './Home.css'
import Work from '../Work/Work'
function Home(){
    return(
        <div className='Home'>
{/*             <img data-aos="fade-down" data-aos-delay="150" data-aos-once="true" src="https://raw.githubusercontent.com/KerolosGreen/myportfolio/main/public/public%20assets/Github-Kerolos_ReadmeImage.png" style={{width: '80%'}}/> */}
            <img data-aos="fade-down" data-aos-delay="150" data-aos-once="true" className='gifball' src='../../public%20assets/circle.gif'/>
            <h1 data-aos="fade-right" data-aos-delay="150" data-aos-once="true">Hi , I'm Kerolos Safwat</h1>
            <p data-aos="fade-left" data-aos-delay="150" data-aos-once="true">And This Is My Portfolio</p>
            
            <a href="https://raw.githubusercontent.com/KerolosGreen/myportfolio/main/public/public%20assets/Kerolos Safwat FullStack - Resume.pdf">
            <button data-aos="zoom-out" data-aos-delay="150" data-aos-once="true" className='resume-button'>My Resume</button>
            </a>
            <img className="backgroundpattern" src="https://raw.githubusercontent.com/KerolosGreen/myportfolio/387b4b4135db22881cd42168d2771fabc8d285b6/public/public%20assets/spiral.svg"/>
            <img className="ReadMeImg" data-aos="fade-down" data-aos-delay="150" data-aos-once="true" src="https://raw.githubusercontent.com/KerolosGreen/myportfolio/main/public/public%20assets/linkedinimg4.png"/>
            <img className="ReadMeImgMobile" data-aos="fade-down" data-aos-delay="150" data-aos-once="true" src="https://raw.githubusercontent.com/KerolosGreen/myportfolio/main/public/public%20assets/Portfolio%20Mobile%20ReadMEIMG-4.png"/>
            <Work/>
{/*             <img src="https://raw.githubusercontent.com/KerolosGreen/myportfolio/main/public/public%20assets/Github-Kerolos_ReadmeImage.png" style={{width: '80%'}}/> */}
        </div>
    )
}
export default Home
