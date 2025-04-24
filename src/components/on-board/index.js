"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import CommonForm from "../common-form";
import { candidateOnboardFormControls, initialCandidateFormData, initialRecruterFormData, recruiterOnboardFormControls } from "@/utils";

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData,setRecruiterFormData] = useState(
    initialRecruterFormData
  );
  const [candidateFormData,setCandidateFormData] = useState(initialCandidateFormData);

  function handleTabChange(value) {
    setCurrentTab(value);
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
            buttonText={'Onboard as recruiter'}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formcontrols={recruiterOnboardFormControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
