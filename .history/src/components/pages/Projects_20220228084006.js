import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import Navbar from './partials/Navbar';



const Projects = () => {

    const [project, setProject] = useState([]);
    const {id} = useParams();
    const projectId = id;
    const {data: projects, error, isPending} = useFetch('https://my-json-server.typicode.com/just-mann/my-database/projects/' + projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="Projects">
            <Navbar />
            <div className="projectsContainer">
                <h3>Projects</h3>
                <div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Projects;