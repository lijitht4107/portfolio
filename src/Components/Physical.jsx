import React from 'react'
import PersonalDetailsNav from './PersonalDetailsNav'
import physicalImg from '../../public/physical.jpeg'

const Physical = () => {
  return (
    <div >
        <PersonalDetailsNav />
      <div className='container contact-details'>
        <table>
            <tr>
            <td><b>Height :</b></td>
            <td>168</td>
            </tr>
            <tr>
            <td><b>Weight :</b></td>
            <td>63</td>
            </tr>
            
        </table>
        <div><img src={physicalImg} alt="physical img" /></div>
      </div>
    </div>
  )
}

export default Physical
