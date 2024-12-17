import React from 'react'
import '../Css/Projects.css'

const Projects = () => {
  return (
    <div>
        <div className='container projects'>
        <h2>My WebApps</h2>
      <p><i>I have created more number of apps but not fully compleated excepted these</i></p>
      <div className='webapp-links'>
        <article className='weblink-item'>
        <h3>Oodo Web App</h3>
        <p>This is my simple and powerfull web app</p>
        <a className='weblink' href="https://shaliea.odoo.com/"> e-Commersce </a>
        </article>
        <article className='weblink-item'>
            <h3>JavaScript</h3>
            <i>Node.js,Express.js, MongoDb, React.js </i>
            <p></p>
            <div className='weblinks'>
                <a className='weblink' href="https://bookacourt-app.onrender.com">Court Booking</a>
                <a className='weblink' href="https://clickpost-fe22.onrender.com"> Click Post</a>
            </div>
        </article>
      
        </div>
        </div>
      
    </div>
  )
}

export default Projects
