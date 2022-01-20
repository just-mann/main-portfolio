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
            <div className='Home'>
                <Navbar />
            </div>
        )
    }
}

export default Home;
