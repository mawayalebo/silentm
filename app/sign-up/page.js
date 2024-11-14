'use client'

import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div  className='p-10 flex items-center justify-center'>
        <SignUp routing='hash'/>
    </div>
  )
}

export default SignUpPage