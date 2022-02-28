import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import Navbar from './partials/Navbar';



const Projects = () => {

    const [projects, setProjects] = useState([]);
    const {id} = useParams();
    const projectId = id;
    const {data: projects, error, isPending} = useFetch('https://my-json-server.typicode.com/just-mann/my-database/projects/' + projectId);

    useEffect(() => {
        const URI = 'https://my-json-server.typicode.com/just-mann/my-database/projects';

        window.scrollTo(0, 0);

        fetch(`${URI}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState({
                    projects: data
                })
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="Projects">
            <Navbar />
            <div className="projectsContainer">
                <h3>Projects</h3>
                <div>
                    {
                        projects.map(project => {
                            <div key={project.id} className='myFeatProj'>
                                <h3>{project.name}</h3>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Projects;