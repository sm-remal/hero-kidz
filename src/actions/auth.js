"use server"

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs"; 

export const postUser = async (payload) => {
    
    const { email, password, fullName } = payload;

    // Check payload
    if (!email || !password || !fullName) {
        return { success: false, message: "Missing required fields" };
    }

    try {
        const userCollection = await dbConnect(collections.USER);

        // Check user
        const isExistUser = await userCollection.findOne({ email });
        if (isExistUser) {
            return { success: false, message: "User already exists with this email" };
        }

        // Create user
        const newUser = {
            provider: "credential",
            name: fullName, 
            email,
            password: await bcrypt.hash(password, 10), 
            role: "user",
            createdAt: new Date(),
        }

        // Insert user
        const result = await userCollection.insertOne(newUser);

        if (result.acknowledged) {
            return {
                success: true,
                acknowledged: true,
                insertedId: result.insertedId.toString(),
            };
        }
        
        return { success: false, message: "Failed to insert user" };

    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Internal Server Error" };
    }
}