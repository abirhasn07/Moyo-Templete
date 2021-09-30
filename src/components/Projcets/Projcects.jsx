import React from 'react';
import { Link } from 'react-router-dom';
import link from '../../images/link.svg';
import './Project.css';

const Projcects = ({projectData}) => {
    console.log(projectData);
    return (
        <section className="projects" id="Project">
            <h2 className="project-title">
            Amazing projects
            </h2>
            <h4 className="project-subtitle">
            The best design team in NYC.
            </h4>
            <div className="project-container">
                {projectData.map(project=>{
                    const {Category,img,name,id}=project
            return(
                <div className="project-card" key={id}> 
                <img src={img} alt={name} className="card-img" />
                <h3>{name}</h3>
                <p>{Category}</p>
                <Link to={`/project/${id}`}className="link">
                    <img src={link} alt="" width="20px" />
                </Link>
                </div>
            )
                })}

               
            </div>
        </section>
    )
}

export default Projcects
