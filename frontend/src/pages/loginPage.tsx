import React from 'react';

import ScrollNavBar from "../components/repeats/scrollNavBar";
import LoginForm from "../components/admin/loginForm";

const LoginPage: React.FC = () => {


  return (
    <div>
      <ScrollNavBar/>
        <LoginForm/>
    </div>
  );
};

export default LoginPage;
