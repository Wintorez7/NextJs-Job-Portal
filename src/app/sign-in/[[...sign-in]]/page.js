import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='w-full mt-8 flex items-center justify-center'>
      <SignIn />
    </div>
  )
}