import React from 'react'
import K from '../constants/index.js'

const Team = () => {
  return (
    <div>
        {
          K.TEAM.map((member,index)=>{
            console.log(`${index}: ${member.name}`);
            return (
              <div key={index} className=''>
              <h1>Our Creative Team</h1>
    <p>Tour function information without cross action media value quickly maximize timely deliverables.</p>
                <div className='flex flex-row'>
                  <img src={member.image} alt="img" />
                {/* </div> */}
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
 


export default Team