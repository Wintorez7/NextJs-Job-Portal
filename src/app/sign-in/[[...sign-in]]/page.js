import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className=' w-full mt-8 flex items-center justify-center'>
      <Image
        src="/Background Design.png"        // your full page background image
        alt="Background"
        fill
        className="object-cover -z-10" // behind everything
      />
      <SignIn />
    </div>
  )
}