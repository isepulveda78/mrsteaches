import React from 'react'
import { FaGoogle } from "react-icons/fa"
const SocialMediaLogin = () => {
  return (
    <div className=''>
          <button className='btn btn-google ' type="btn-google">
            <FaGoogle className="text-white fs-5 me-2" />  Sign in with Google
          </button>
    </div>
  )
}

export default SocialMediaLogin