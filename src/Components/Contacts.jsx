import React from 'react'
import '../Css/PersonalDetails.css'
import PersonalDetailsNav from './PersonalDetailsNav'
import whatsapp from '../../public/whatsapp.png';
import github from '../../public/github.png';
import instagram from '../../public/instagram.png';
import linkedin from '../../public/linkedin.png';




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
        <tr>
          <td><b>whatsapp :</b></td>
          <td><a href="https://wa.me/917907328823?text=Hi%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
          target='_blank'>+91 7907328823</a></td>
        </tr>
        <tr>
          <td><b>Github :</b></td>
          <td><a href="https://github.com/lijitht4107" target='_blank'>
          lijitht4107</a></td>
        </tr>
        <tr>
          <td><b>LinkedIn :</b></td>
          <td><a href="https://www.linkedin.com/in/lijith-t-t6/" target='_blank'>
          lijith-t</a></td>
        </tr>
        <tr>
          <td><b>Instagram :</b></td>
          <td><a href="https://www.instagram.com/_lijit_lj_/?__pwa=1">
          _lijit_lj_</a></td>
        </tr>
       
      </table>
      
      <div className='social-img-links'>
        <a href="https://wa.me/917907328823?text=Hi%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
        target='_blank'><img src={whatsapp} alt="" /></a>
        <a href="https://github.com/lijitht4107" target='_blank'>
        <img src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/lijith-t-t6/" target='_blank'>
        <img src={linkedin} alt="linkedin" /></a>
        <a href="https://www.instagram.com/_lijit_lj_/?__pwa=1">
        <img src={instagram} alt="instagram" /></a>
      </div>
    </div>
    </>
  )
}

export default Contacts
