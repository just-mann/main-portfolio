import React, { useEffect }from 'react';
import Navbar from './partials/Navbar';



const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="Projects">
            <Navbar />
            <div className="projectsContainer">
                <h3>Projects</h3>
            </div>
        </div>
    );
}
 
export default Projects;