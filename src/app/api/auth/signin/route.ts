import { findUnique } from "@/helpers";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export const POST = async (req: NextRequest) => {
    try {
        const {email, password} = await req.json();
        const user = findUnique({email});
        if(!user){
            return NextResponse.json(
                {message : "invalid Email Address!"},
                { status: 400}
            );
        }
        const isValidPassword = await bcryptjs.compare(password, user.password);

        if(!isValidPassword){
            return NextResponse.json(
                {message : "invalid Password!"},
                { status: 400}
            );
        }

    } catch (error) {
        
    }
}