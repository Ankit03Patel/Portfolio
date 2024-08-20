
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import img from '../../assets/ankit2.jpeg'

const About = () => {
  return (
    <div id='about'className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={img} alt="" />
            </div>
            <div className="about-right">
               <div className="about-para">
                <p>I am a fullstack developer skilled in MERN stack.</p>
                <p>I specialize in building dynamic and responsive web application,always aiming to deliver efficient and scalable solutions.</p>
                </div>  
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p> <hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p> <hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React.js</p> <hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Node.js</p> <hr style={{width:"75%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Express.js</p> <hr style={{width:"68%"}} />
                    </div>
                    <div className="about-skill">
                        <p>MongoDb</p> <hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Git,GitHub</p> <hr style={{width:"76%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Figma,Canva</p> <hr style={{width:"60%"}} />
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  ) 
}

export default About