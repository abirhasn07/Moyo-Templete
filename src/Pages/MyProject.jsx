import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MyProject = ({projectData}) => {
    let {id}=useParams()
    console.log(id);
    // const dataId=projectData.find(project=>(project.id===id))
    // console.log(dataId);
  const mainData= projectData.filter(data=>{
      return(data.id===Number(id))
  })
  console.log(mainData);
  
    return (
        <section className="my-project">
            <Navbar/>

            <div className="myproject-container">
                <h1 className="project-name">
                    {mainData[0].name}
                </h1>
                <h4 className="category">
                    {mainData[0].Category}
                </h4>
                <Link to="/" className="home-btn">
                    Back to Work
                </Link>
            </div>

            <div className="my-project-sub-container">
                <div className="img">
                    <img src=  {mainData[0].img} alt=  {mainData[0].Category} />
                </div>

                <div className="project-description">
                    <h3 className="project-name2">{mainData[0].name}</h3>
                    <h4 className="category2">
                    {mainData[0].Category}
                </h4>
                <p>{mainData[0].Data_Created}</p>
                    <h3 
                    className="description">Project Description</h3>
                    <p>{mainData[0].Project_Description}</p>

                <h3>Work Summary</h3>

                <p className="summery">
                    {mainData[0].Summary}
                </p>
                </div>

            </div>
         
        </section>
    )
}

export default MyProject
