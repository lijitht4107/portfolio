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
                <li onClick={()=>navigate('/personaldata')}>Personal Details</li>
                <li>Profetional Details</li>
                <li>Projects</li>
                <li>Using Tools/</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
