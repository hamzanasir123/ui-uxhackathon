import React from "react";
import Form from "./Components/Form/Form";


export default function Home(): React.JSX.Element {
  return (
    <>
      <div>
        <Form btnTitle="SignUp" apiUrl="http://localhost:3000/api/auth/signup"/>
      </div>
    </>
  );
}
