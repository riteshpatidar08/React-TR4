import React from 'react'
import User from './User'

function Profile({userData}) {
    console.log('profile')
  return (
    <div className='border p-4 border-red-500 rounded-2xl'>
      Profile
      <User userData={userData}/>
    </div>
  )
}

export default Profile
