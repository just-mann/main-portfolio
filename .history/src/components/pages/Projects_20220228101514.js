import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './partials/Navbar';

class Projects extends Component {

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
        return (
            <div className="Projects">
                <Navbar />
                <div className="projectsContainer">
                    <h3>Projects</h3>
                    <div className="projectDiv">
                        {
                            this.state.projects.map(project => {
                                return (
                                    <div className='myFeatProj'>
                                        <div className="left">
                                            <Link to={`/projects/${project.id}`}>
                                                <img src={project.projectImg1} alt={project.name} />
                                            </Link>
                                            <div className="shortDesc">
                                                <p>Lorem, ipsum dolor.</p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nemo, illum veritatis, perspiciatis aspernatur praesentium necessitatibus ipsa pariatur corporis excepturi, aliquid quos nesciunt omnis ratione?</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
