import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import clients from "../../../../../client";

export const logInSchema = z.object({
    email: z.string().email({message: "Invalid Email"}),
    password : z.string().min(8, {message: "password must contain atleast 8 characters"})
})

const query =
    `
*[_type == 'userData']{
  email , password
}
`

interface queryType {
    email: string,
    password: string
}



export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    const sanityData: queryType[] = await clients.fetch(query)

    const schemaResponse = await logInSchema.safeParseAsync(data)

    if (!schemaResponse.success) return NextResponse.json(schemaResponse.error);

    const user = sanityData.find((item: queryType) => item.email == data.email)
    if(!user) return NextResponse.json({error: "Invalid Email"}, {status: 400})

      const passwordComparison = await bcryptjs.compare(data.password, user?.password ? user.password : "")

    if (!passwordComparison) return NextResponse.json({ error: "Invalid password" }, {status: 400})


    const token = await jwt.sign(
      {email: user.email },
      process.env.SANITY_API_TOKEN!,
      { expiresIn: "1d" }
    );

    // Create a new object without the password property
    const { password: hashedPassword, ...updatedUser } = user;

    const response = NextResponse.json(
      { message: "Successfully Logged in", user: updatedUser },
      { status: 200 }
    );
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);

    cookies().set("token", token, {
      httpOnly: true,
      expires: expirationDate,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 200 }
    );
  }
};
