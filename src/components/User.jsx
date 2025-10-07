import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
function User({userData}) {
    console.log('user')
   const {userName , collegeName } =useContext(DataContext)
  return (
    <div className='border border-blue-500 rounded-2xl'>
      user : {userData}
      {userName }  , collegeName : {collegeName}
    </div>
  )
}

export default User
