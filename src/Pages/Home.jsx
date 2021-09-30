
     
     import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Projcects from '../components/Projcets/Projcects'
import Team from '../components/Team/Team'
import Testimonial from '../components/Testimonial/Testimonial'
     
     const Home = ({projectData,data,team}) => {
         return (
             <>
             <Navbar/>
              <Header/>
              <About/>
              <Projcects projectData={projectData}/>
              <Testimonial data={data}/>
              <Team team={team}/>
              <Contact/>
                 
             </>
         )
     }
     
     export default Home
     