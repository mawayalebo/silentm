'use client'

import { SignIn } from '@clerk/nextjs'

function SignInPage() {
  return (
    <div className='p-10 flex items-center justify-center'>
      <SignIn routing='hash'/>

        
    </div>
  )
}

export default SignInPage