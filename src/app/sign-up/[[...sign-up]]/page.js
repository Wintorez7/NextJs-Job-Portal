import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className=" w-full mt-8 flex items-center justify-center">
      <Image
        src="/Background Design.png" 
        alt="Background"
        fill
        className="object-cover -z-10" 
      />
      <SignUp />
    </div>
  );
}
