import React from 'react';
import { useNavigate } from 'react-router';
import '../Css/PersonalDetailsNav.css'

const PersonalDetailsNav = () => {
    const navigate = useNavigate();
  return (
    <div className='personaldetails-nav'>
        
      <ul>
        <li onClick={()=>navigate('/address')}>Adress</li>
        <li onClick={()=>navigate('/contactdetails')}>Contacts</li>
        <li>physical</li>
      </ul>
    </div>
  )
}

export default PersonalDetailsNav
