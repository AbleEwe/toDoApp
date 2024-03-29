import openai from "@/openai";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
    try {
        const { todos } = await request.json();

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            temperature: 0.8,
            n: 1,
            stream: false,
            messages: [
                {
                    role: "system",
                    content: `When responding, welcome the user always as Mr.Diego and say welcome to the ToDo App! Limit the response to 200 characters`,
                },
                {
                    role: "user",
                    content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, In Progress, and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,  
                },
            ],
        });
        
               const responseData = response.choices[0].message.content;

            return NextResponse.json(responseData);
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status);
            console.error(error.message); 
            console.error(error.code);  
            console.error(error.type);
    }
}
}
