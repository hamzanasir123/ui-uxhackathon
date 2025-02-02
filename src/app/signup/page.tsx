import React from "react";
import Link from "next/link";
import { Form } from "../Components/Form";

async function SignUpPage() {
 

  return (
    <>
      <Form btnTitle="Sign Up" apiUrl="http://localhost:3000/api/auth/signup"/>
    </>
  );
}

export default SignUpPage;
