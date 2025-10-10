import React from 'react'

function Header({userData}) {
  return (
    <div className='border mb-4 p-4 border-red-500 rounded-2xl'>
   Header : username {userData}
    </div>

  )
}

export default Header
