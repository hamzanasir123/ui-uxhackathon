import React from "react";
import { Form } from "../Components/Form";
function LoginPage() {


  return (
      <Form
        btnTitle="login"
        isLogin={true}
        apiUrl="http://localhost:3000/api/auth/login"
      />
  );
}

export default LoginPage;
