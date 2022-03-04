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
                            this.state.projects.slice(0, 4).map(project => {
                                return (
                                    <div className='myFeatProj'>
                                        <div>
                                            <div className="left">
                                                <img src={project.projectImg1} alt={project.name} />
                                                <div className="shortDesc">

                                                </div>
                                            </div>
                                            <div className="right">
                                                
                                            </div>
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
