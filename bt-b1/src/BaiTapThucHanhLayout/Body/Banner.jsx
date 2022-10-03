import React from 'react'

const Banner = () => {
  return (
    <div className='container text-center bg-light mt-5 rounded'>
        <div className='content p-4 p-lg-5'>
            <div className='m-4 m-lg-5'>
            <h1 className='fw-bold display-4'>A warm welcome!</h1>
        <p className="h3 pb-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <button className='btn btn-primary btn-lg'>Call To Action</button>
            </div>
        </div>
    </div>
  )
}

export default Banner