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
        <li onClick={()=>navigate('/physical')}>physical</li>
      </ul>
    </div>
  )
}

export default PersonalDetailsNav
