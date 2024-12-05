import React from 'react'
import '../Css/PersonalDetails.css'
import PersonalDetailsNav from './PersonalDetailsNav'

const Contacts = () => {
  return (
    <>
    <PersonalDetailsNav />
    <div className='container contact-details'>
      <h2>Contact Details</h2>
      <table>
        <tr>
            <td><b>Phone :</b></td>
            <td>+91 7907328823</td>
        </tr>
        <tr>
            <td><b>Email :</b></td>
            <td><a href="mailto:lijiththazhathethil@gmail.com">lijiththazhathethil@gmail.com</a></td>
        </tr>
       
      </table>
      <div className='social-links'>
        <a href="https://wa.me/917907328823?text=Hi%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
         target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
         <a href="https://github.com/lijitht4107"
         target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
         <a href="https://www.linkedin.com/in/lijith-t-t6/"
         target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
    </>
  )
}

export default Contacts
