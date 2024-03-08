import React, { useState } from 'react';

import ScrollNavBar from "../components/scrollNavBar";
import LoginForm from "../components/loginForm";

const LoginPage: React.FC = () => {


  return (
    <div>
      <ScrollNavBar/>
        <LoginForm/>
    </div>
  );
};

export default LoginPage;
