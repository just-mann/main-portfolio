import React, { Component } from 'react';
import Navbar from './partials/Navbar';
//import Footer from './partials/Footer';
import bgImage from './images/lineBg.jpeg';
import {Link} from 'react-router-dom';
import {FaReact, FaGit, FaSass, FaGithub, FaNodeJs, FaFigma, FaWindows} from 'react-icons/fa';
import {SiJquery, SiExpress, SiCsswizardry, SiMongodb} from 'react-icons/si';
import {BsBootstrapFill, BsArrowRight} from 'react-icons/bs';
import {BiCodeAlt} from 'react-icons/bi';
import {MdMobileFriendly} from 'react-icons/md';
import {GiNetworkBars} from 'react-icons/gi';
import {IoLogoJavascript, IoMdContacts} from 'react-icons/io';



class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }
    }


    componentDidMount() {
        const URI = 'https://my-json-server.typicode.com/just-mann/my-database/projects';

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
        return (
<<<<<<< HEAD
            <div className='Home'>
                <Navbar />
=======
            <div>
                <div className='Home' style={myBackground}>
                    <Navbar />
                    <div className="mainSection">
                        <div className="mainHero">
                            <h3>Hey there, I am Justin Kollie</h3>
                            <p>
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                            </p>
                            <Link to='/contact-me' className='contact'>Get In Touch</Link>
                        </div>
                    </div>
                </div>
                <section className='whatIDo'>
                    <div className="whatIDoLeft">
                        
                    </div>
                    <div className="whatIDoRight">
                        <p className='whoAmI'>Who I Am</p>
                        <h3 className='heading'>I design & build amazing websites</h3>
                        <p className='description'>I want my clients to feel awesome and unique. Let's work together to bring your projects to another level.</p>
                        <Link to='/portfolio' className='viewPortfolio'>Portfolio</Link>
                    </div>
                    
                </section>
                <section className="mySkills">
                    <div className='skillsContainer'>
                        <div className="skill" title='CSS3'><SiCsswizardry /></div>
                        <div className="skill" title='Bootstrap'><BsBootstrapFill /></div>
                        <div className="skill" title='Sass'><FaSass /></div>
                        <div className="skill" title='JavaScript'><IoLogoJavascript /></div>
                        <div className="skill" title='jQuery'><SiJquery /></div>
                        <div className="skill" title='ReactJS'><FaReact /></div>
                        <div className="skill" title='Git'><FaGit /></div>
                        <div className="skill" title='Github'><FaGithub /></div>
                        <div className="skill" title='NodeJS'><FaNodeJs /></div>
                        <div className="skill" title='Express'><SiExpress /></div>
                        <div className="skill" title='MongoDB'><SiMongodb /></div>
                        <div className="skill" title='Windows Terminal'><FaWindows /></div>
                    </div>
                    <div className="skillsDescription">
                        <h3>My Skills</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Excepturi illo, aliquid facere ipsum incidunt cum neque 
                            recusandae et tempora consectetur est cumque minus hic 
                            molestiae iste harum minima, ea nemo aperiam? Magnam minima
                             excepturi aut quia molestias quas quam doloribus quibusdam. Quos doloremque 
                            est corrupti repellendus dicta eligendi laboriosam nesciunt?
                        </p>
                    </div>
                </section>
                <section className="mySpecialty">
                    <div className="specContainer">
                        <div className='respDesign'>
                            <i>{designImg}</i>
                            <h3>Creative Design</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                            </p>
                            {/* <Link to='/'><BsArrowRight /></Link> */}
                        </div>
                        <div className='development'>
                            <i class="fas fa-code">{devImg}</i>
                            <h3>Web Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                            </p>
                            {/* <Link to='/'><BsArrowRight /></Link> */}
                        </div>
                        <div className='design'>
                            <i>{respDesImg}</i>
                            <h3>Mobile Friendly</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto omnis autem rem tempora. Aliquam.
                            </p>
                            {/* <Link to='/'><BsArrowRight /></Link> */}
                        </div>
                    </div>
                </section>
                <section className="selectedProjects">
                    <h3>Selected Work</h3>
                    <div className="projectDiv">
                        {
                            this.state.projects.slice(0, 4).map(project => {
                                return (
                                    <div key={project.id} className='myFeatProj'>
                                        <img src={project.projectImg1} alt={project.name} />
                                        <div className='bottomSection'>
                                            <p className='projectName'>{project.name}</p>
                                            <a className='projectUrl' href={project.projectUrl}>Live Demo</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Link to='/portfolio' className='viewAllProjects'>All Projects</Link>
                </section>
                <section className="preFooter">
                        <div className='getInTouch'>
                            <i><GiNetworkBars /></i>
                            <p>Let's Work Together</p>
                            <h3>Have a Project?</h3>
                            <Link to="/contact-me">Get In Touch</Link>
                        </div>
                        <div className='dnlResume'>
                            <i><IoMdContacts /></i>
                            <p>I'm A Team Player</p>
                            <h3>Have A Job?</h3>
                            <Link to="/">See Resume</Link>
                        </div>
                </section>
>>>>>>> d290fa7e42a77e2e8035adcede7703609993b456
            </div>
        )
    }
}

export default Home;
