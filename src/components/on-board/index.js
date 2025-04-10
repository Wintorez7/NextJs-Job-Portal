'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";


function OnBoard() {

    const[currentTab,setCurrentTab] = useState('candidate')

    function handleTabChange(value) {
        setCurrentTab(value)
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
                            <TabsTrigger className="cursor-pointer" value="candidate">Candidate</TabsTrigger>
                            <TabsTrigger className="cursor-pointer" value="Recruiter">Recruiter</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <TabsContent value="candidate">candidate</TabsContent>
                <TabsContent value="recruiter">Recruiter</TabsContent>
            </Tabs>
        </div>
     );
}

export default OnBoard;