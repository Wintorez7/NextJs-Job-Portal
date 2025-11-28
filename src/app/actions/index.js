'use server'

import connectToDb from "@/Database"
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";


// create profile action
export async function createProfileAction(formData,pathToRevalidate) {
    await connectToDb();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate)
}


export async function fetchProfileAction(id) {
    await connectToDb();
    const result = await Profile.findOne({userId:id});
    return JSON.parse(JSON.stringify(result))
}

