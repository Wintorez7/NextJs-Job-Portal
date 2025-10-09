import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='w-full mt-8 flex items-center justify-center'>
      <SignUp />
    </div>
  )
}