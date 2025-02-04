import React from "react";
import { Form } from "../Components/Form";
function LoginPage() {


  return (
      <Form
        btnTitle="login"
        isLogin={true}
        apiUrl="https://ui-uxhackathon.vercel.app/api/auth/login"
      />
  );
}

export default LoginPage;
