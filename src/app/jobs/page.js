import JobListing from '@/components/Job-lisiting'
import { currentUser } from "@clerk/nextjs/server"; 
import React from 'react'
import { fetchProfileAction } from '../actions';

const jobsPage = async () => {

  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);

  

  return (
    <JobListing user={JSON.parse(JSON.stringify(user))} profileInfo={profileInfo}/>
  )
}

export default jobsPage