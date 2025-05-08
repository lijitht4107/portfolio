import React from 'react'
import '../Css/Header.css'
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='container'>
        <div className='folio-header'>
            <ul>
                <li onClick={()=>navigate('/personaldetails-nav')}>Personal Details</li>
                <li>Images Of Coding</li>
                <li onClick={()=>navigate('/myprojects')}>Projects</li>
                <li onClick={()=>navigate('/mytools')}>Using Tools/</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
