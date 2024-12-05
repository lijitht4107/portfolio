import React from 'react'
import '../Css/PersonalDetails.css'
import PersonalDetailsNav from './PersonalDetailsNav'

const Address = () => {
  return (
    <>
    <PersonalDetailsNav />
    <div className='container address-details'>
      <h2 className='address-h'>Personal Details</h2>
      <table className='address-table'>
        <tr>
          <td>Name</td>
          <td>Lijith</td>
        </tr>
        
        <tr>
          <td>Address</td>
          <td >Thazhathethil</td>
        </tr>
        <tr>
          <td></td>
          <td>Karumanam Kurussi</td>
        </tr>
        <tr>
          <td></td>
          <td>Cherppulassery</td>
        </tr>
        <tr>
          <td></td>
          <td>Palakkad</td>
        </tr>
        <tr>
          <td></td>
          <td>Kerala</td>
        </tr>
        <tr>
          <td></td>
          <td>India</td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default Address
