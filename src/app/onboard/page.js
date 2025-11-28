import OnBoard from "@/components/on-board";

import { fetchProfileAction } from "../actions";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server"; 



async function OnBoardPage() {
    // get authenticated user from clerk
    const user = await currentUser();

    // fetch the profile info -> user if candidate or Recuriter
    const profileInfo = await fetchProfileAction(user?.id);
    if(profileInfo?._id){
        if(profileInfo?.role === 'recruiter' && !profileInfo.isPremiumUser){
            redirect('/membership')
        }else redirect('/')           
        
    }else return <OnBoard/>
    

}

export default OnBoardPage;