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
            <div className="ProjDetContainer">
                <h3>Project Details</h3>
            </div>
        </div>
    );
}
 
export default ProjDetails;