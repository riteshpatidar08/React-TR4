import React, { useEffect } from 'react'
import User from './User'
import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
function Profile({userData}) {
  const {fetchData , todos} = useContext(ApiContext)
  useEffect(()=>{
    fetchData()
  },[])
  console.log(todos)
    console.log('profile')
  return (
    <div className='border p-4 border-red-500 rounded-2xl'>
      Profile
      <User userData={userData}/>
    </div>
  )
}

export default Profile
