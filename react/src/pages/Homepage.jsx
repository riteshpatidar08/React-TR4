import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <h1 className='text-3xl text-emerald-500 font-bold'>THIS IS OUR HOMEPAGE</h1>
      <h1>Welcome User <Link className='text-sky-400 underline' to='/login'>Logout</Link></h1>
    </div>
  )
}

export default Homepage
