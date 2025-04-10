import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';


async function Home() {

  const user = await currentUser()
  console.log(user,'currentuser');

  const profileInfo = null;
  if(user && !profileInfo?._id) redirect('/onboard')

return (
    <div>
      <h1>Main Content</h1>
    </div>
  );
}

export default Home