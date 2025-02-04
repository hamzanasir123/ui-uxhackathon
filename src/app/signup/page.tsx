import React from "react";
import { Form } from "../Components/Form";

async function SignUpPage() {
 

  return (
    <>
      <Form btnTitle="Sign Up" apiUrl="https://ui-uxhackathon.vercel.app/api/auth/signup"/>
    </>
  );
}

export default SignUpPage;
