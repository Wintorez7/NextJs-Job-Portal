"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import CommonForm from "../common-form";
import { candidateOnboardFormControls, initialCandidateFormData, initialRecruterFormData, recruiterOnboardFormControls } from "@/utils";
import { useUser } from "@clerk/nextjs";

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData,setRecruiterFormData] = useState(
    initialRecruterFormData
  );
  const [candidateFormData,setCandidateFormData] = useState(initialCandidateFormData);

  const currentAuthUser = useUser();
  const {user} = currentAuthUser;
  console.log(currentAuthUser)

  function handleTabChange(value) {
    setCurrentTab(value);
  }

  console.log(recruiterFormData,"recruiterFormData")

  function handlerecruiterFormValid(){
      return recruiterFormData && recruiterFormData.name.trim() !== '' &&
      recruiterFormData.companyName.trim() !== '' && recruiterFormData.companyRole.trim() !== ''
  }

  function handleCandidateFormValid(){
    return candidateFormData && candidateFormData.name.trim() !== '' &&
      candidateFormData.currentCompany.trim() !== '' && candidateFormData.currentJobLocation.trim() !== '' && candidateFormData.preferdJobLocation.trim() !== '' && candidateFormData.currentSalary.trim() !== '' && candidateFormData.noticePeriod.trim() !== ''
      && candidateFormData.skills.trim() !== '' && candidateFormData.skills.trim() !== '' && candidateFormData.previousCompany.trim() !== ''
      && candidateFormData.totalExperience.trim() !== '' && candidateFormData.college.trim() !== '' && candidateFormData.collegeLocation.trim() !== '' && candidateFormData.graduatedYear.trim() !== '' && candidateFormData.linkedinProfile.trim() !== '' && candidateFormData.githubProfile.trim() !== ''
  }

  async function createProfileAction() {
      const data =  {
      recruiterInfo : recruiterFormData,
      role : 'recruiter',
      isPremiumUser : false,
      userId : user?.id,
      email : user?.primaryEmailAddress?.emailAddress
      };

      await createProfileAction(data, "/onboard");
  }

  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome To OnBoard
            </h1>
            <TabsList>
              <TabsTrigger className="cursor-pointer" value="candidate">
                Candidate
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="recruiter">
                Recruiter
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">
          <CommonForm
            formcontrols={candidateOnboardFormControls}
            buttonText={'Onboard as candidate'}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            isBtnDisabled={!handleCandidateFormValid()}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formcontrols={recruiterOnboardFormControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handlerecruiterFormValid()}
            action={createProfileAction}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
