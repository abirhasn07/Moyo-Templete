import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import project from './database/projects'
import teamData from './database/team.js'
import './Global.css'
import Home from './Pages/Home.jsx'
import MyProject from './Pages/MyProject'


const App = () => {
  const [projectData, setProjectData] = useState(project)
  const [team, setTeam] = useState(teamData)
  const [testimonial, setTestimonial] = useState([])
  // console.log(testimonial);
  useEffect(()=>{
    fetch('https://testimonialapi.toolcarton.com/api')
    .then(data=>data.json())
    .then(data=>setTestimonial(data))
   
  },[])

  // gsap 

  useEffect(()=>{


  },[])



  return (
    <>
    <Router>
    <Switch> 
    <Route path="/" exact>
     <Home 
     projectData={projectData}
     data={testimonial}
     team={team}
     />
     </Route>
     <Route path="/project/:id">
     <MyProject projectData={projectData}/>
     </Route>
     </Switch>
     </Router>
    </>
  )
}

export default App
