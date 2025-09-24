import React from 'react'
import { Link } from 'react-router-dom'

function ProductPage() {
  return (
    <div className='h-screen flex justify-center items-center gap-10 font-bold text-xl'>
     <Link to='/products/mobile' className='underline'>MOBILE</Link>
     <Link to='/products/tv'  className='underline'>TV</Link>
     <Link to='/products/ac'  className='underline'>AC</Link>
    
    </div>
  )
}

export default ProductPage
