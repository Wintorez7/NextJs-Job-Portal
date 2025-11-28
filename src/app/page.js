import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchProfileAction } from "./actions";

async function Home() {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);
  if(user && !profileInfo?.id) redirect('/onboard ')


  return (
    <div>
      <h1>Main Content</h1>
    </div>
  );
}

export default Home;
