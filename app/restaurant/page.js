"use client"

import React, { useState } from 'react'
import RestaurantSignUp from '../_components/RestaurantSignUp'
import { SignupPage } from '@/components/signup-page'
import { useScroll } from 'framer-motion'
import { LogIn } from 'lucide-react'
import { LoginPageComponent } from '@/components/login-page'

const Restaurant = () => {
    const [isLogin, setIsLogin] = useState(false)
  return (
    <>
    <div>
        {isLogin ? <SignupPage/> : <LoginPageComponent/> }
    </div>
    <div>
        <button onClick={()=>{setIsLogin(!isLogin)}}>
            {isLogin ? "Create New Account" : "Already Have an account login here"}
        </button>
    </div>
    </>
  )
}

export default Restaurant