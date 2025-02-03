import { NextResponse, NextRequest } from "next/server";
import { generateUniqueID, writeDatabase, findUnique } from "@/helpers";
import { User } from "@/app/types/user";
import bcryptjs from "bcryptjs";
import { createClient } from "next-sanity";
import { z } from "zod"

export const signUpSchema = z.object({
    username: z.string().min(3, { message: "Minimum 3 characters are required in a name" }),
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(6, { message: "Minimum 6 characters are required in possword" }),
}).strict()


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-02-22',
  useCdn: false
})

interface userEmails {
  email: string
}

export const GET = () => {
  return NextResponse.json({ message: "success" }, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const query = `
    *[_type == "userData"] {
      email
    }
  `;
  
  const data = await req.json();
  const schemaResponse = await signUpSchema.safeParseAsync(data);

  if (!schemaResponse.success) {
    const errorMessages = schemaResponse.error.errors.map(err => err.message);
    return NextResponse.json({ error : errorMessages.join(", ") }, { status: 400 });
  }

  const { username, email, password } = schemaResponse.data;

  const hashedPassword = await bcryptjs.hash(password, 11);

  // Check if email already exists in the database
  const emailExists = await client.fetch(query).then((data: userEmails[]) => 
    data.find((item: userEmails) => item.email === email)
  );

  if (emailExists) {
    return NextResponse.json({  error : "Email already exists" }, { status: 400 });
  }

  // Create new user and store credentials
  const response = await client.create({
    _type: "userData",
    username: username,
    email: email,
    password: hashedPassword,
  });

  return NextResponse.json({ message: "User successfully created", response: response }, { status: 200 });
};
