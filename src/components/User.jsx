import React from 'react'

function User({userData}) {
    console.log('user')
  return (
    <div className='border border-blue-500 rounded-2xl'>
      user : {userData}
    </div>
  )
}

export default User
