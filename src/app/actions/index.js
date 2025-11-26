'use server'

import connectToDb from "@/Database"
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";


// create profile action
export async function createProfile(formData,pathToRevalidate) {
    await connectToDb();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate)
}