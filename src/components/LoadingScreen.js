import React from 'react'
import BarLoader from 'react-spinners/BarLoader'

const LoadingScreen = () => {
  return (
    <div className='auth__loading-screen'>
      <BarLoader color='#fff' />
    </div>
  )
}

export default LoadingScreen
