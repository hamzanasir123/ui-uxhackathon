import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { findUnique, generateUniqueID, writeDatabase } from "@/helpers";
import { User } from "@/app/types/user";

export const GET = () => {
    return NextResponse.json({ message: "success" }, { status: 200 });
  };

export const POST = async (req: NextRequest) => {
  try {
    const { username, email, password } = await req.json();
    const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(password, salt);
    if(findUnique(email)){
        return NextResponse.json(
            {message : "Email Must Be Unique"},
            {status : 400}
        );
    }
    const newUser : User = {
        _id : generateUniqueID(),
        name : username,
        email : email,
        password : hashedPassword,
    };
    writeDatabase(newUser);

    return NextResponse.json(
        {message : "User Created Successfully"},
        {status : 201},
    );
} catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
};
