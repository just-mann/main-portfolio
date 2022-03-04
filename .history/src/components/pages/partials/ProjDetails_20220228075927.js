import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../useFetch';
import Navbar from "./Navbar";



const ProjDetails = () => {

    const {id} = useParams();
    const projectId = id;
    const {data: projects, error, isPending} = useFetch('https://my-json-server.typicode.com/just-mann/my-database/projects/' + projectId);
    

    return (
        <div className="ProjDetails">
            <Navbar />
            <div className="ProjDetails">
                <div className="myContainer text-center text-light">
                    {isPending && <div>
                        <ReactLoading type={"bars"} color={"#fff"} className="mx-auto" />   
                    </div>}
                    {error && <h1 className="mx-auto text-center text-danger">{ error }</h1>}
                        {projects && (
                            <div>
                                <h4>{projects.projectKind}</h4>
                                <h3>{projects.name}</h3>
                                <p className="projAbout">{projects.aboutProj}</p>
                                {/* <p>Tools used : </p> */}
                                <a href={projects.projectUrl} target="_blank" rel="noreferrer" className="btn mt-4">Visit Website</a>
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default ProjDetails;