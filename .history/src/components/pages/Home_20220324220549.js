import React, { Component } from 'react';
import Navbar from './partials/Navbar';
//import Footer from './partials/Footer';
import resumePdf from './images/resumeJK_updated.pdf';
import bgImage from './images/lineBg.jpeg';
import {Link} from 'react-router-dom';
import {FaReact, FaGit, FaSass, FaGithub, FaNodeJs, FaFigma, FaWindows} from 'react-icons/fa';
import {SiJquery, SiExpress, SiCsswizardry, SiMongodb} from 'react-icons/si';
import {BsBootstrapFill} from 'react-icons/bs';
import {BiCodeAlt} from 'react-icons/bi';
import {MdMobileFriendly} from 'react-icons/md';
import {GiNetworkBars} from 'react-icons/gi';
import {IoLogoJavascript, IoMdContacts} from 'react-icons/io';
import heroImg from './images/jsFrameWorksSvh.cd748f1a.svg'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }
    }


    componentDidMount() {
        const URI = 'https://my-json-server.typicode.com/just-mann/my-database/projects';
        
        window.scrollTo(0, 0);
        
        fetch(`${URI}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    projects: data
                })
            })
            .catch(err => console.log(err));
    }

    render() {

        const myBackground = {
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit: 'cover'
        }
    
        const designImg = <FaFigma />;
        const devImg = <BiCodeAlt />;
        const respDesImg = <MdMobileFriendly />;


        return (
            <div>
                <div className='Home' style={myBackground}>
                    <Navbar />
                    <div className="mainSection">
                        <div className="mainHero">
                            <h2>Web Developer & Designer From Rhode Island</h2>
                            <p>
                                A Frontend focused Web Developer 
                                building the Frontend of Websites 
                                and Web Applications that leads to 
                                the success of the overall product
                            </p>
                            <a href={resumePdf} className='contact' target="_blank" rel="noopener noreferrer">See My Resume</a>
                            <Link to='/contact-me' className='contact'>Get In Touch</Link>
                        </div>
                        <div className='heroImg'>
                            <div className="circle"></div>
                            <div className="circle circle2"></div>
                            <img src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
                <section className="mySpecialty">
                    <div className="specContainer">
                        <div>
                            <div className='respDesign gridDiv'>
                                <i>{designImg}</i>
                                <h3>Creative Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                                </p>
                                {/* <Link to='/'><BsArrowRight /></Link> */}
                            </div>
                            <div className='development gridDiv'>
                                <i class="fas fa-code">{devImg}</i>
                                <h3>Web Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                                </p>
                                {/* <Link to='/'><BsArrowRight /></Link> */}
                            </div>
                            <div className='design gridDiv'>
                                <i>{respDesImg}</i>
                                <h3>Mobile Friendly</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mySkills">
                    <div>
                        <div className="whatIDoLeft">
                            <p className='whoAmI'>Who I Am</p>
                            <h3 className='heading'>I design & build amazing websites</h3>
                            <p className='description'>I want my clients to feel awesome and unique. Let's work together to bring your projects to another level.</p>
                            <Link to='/about-me' className='viewMe'>About Me</Link>
                        </div>
                        <div className='skillsContainer'>
                            <div className="skill" title='CSS3'>CSS3</div>
                            <div className="skill" title='Bootstrap'>Bootstrap</div>
                            <div className="skill" title='Sass'>Sass</div>
                            <div className="skill" title='JavaScript'>JavaScript</div>
                            <div className="skill" title='jQuery'>jQuery</div>
                            <div className="skill" title='ReactJS'>ReactJS</div>
                            <div className="skill" title='Git'>Git</div>
                            <div className="skill" title='Github'>Github</div>
                            <div className="skill" title='NodeJS'>NodeJS Basics</div>
                            <div className="skill" title='Express'>ExpressJS Basics</div>
                            <div className="skill" title='MongoDB'>MongoDB Basics</div>
                            <div className="skill" title='Terminal'>Terminal</div>
                        </div>
                    </div>
                </section>
                <section className="selectedProjects">
                    <div>
                        <h4>Selected Work</h4>
                        <div className='upperPart'>
                            <p>A collection of some of my recently completed projects, covering a wide range of design disciplines</p>
                            <Link to='/projects' className='viewAllProjects'>All Projects</Link>
                        </div>
                        <div className="projectDiv">
                            {
                                this.state.projects.slice(0, 4).map(project => {
                                    return (
                                        <Link to={`/projects/${project.id}`} key={project.id} className='myFeatProj'>
                                            <img src={project.projectImg1} alt={project.name} />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
