import React, { Component } from 'react'

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
                    <div>
                        {
                            this.state.projects.map(project => {
                                <div key={project.id} className='myFeatProj'>
                                    <h3>{project.name}</h3>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
