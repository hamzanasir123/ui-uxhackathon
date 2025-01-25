import React from "react";
import Form from "./Components/Form/Form";


export default function Home(): React.JSX.Element {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/auth/signup";
  return (
    <>
      <div>
        <Form btnTitle="SignUp" apiUrl={apiUrl}/>
      </div>
    </>
  );
}
