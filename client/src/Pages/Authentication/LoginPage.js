import React, { useEffect } from 'react';
import LoginForm from '../../Components/Home/Login/LoginForm';

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
