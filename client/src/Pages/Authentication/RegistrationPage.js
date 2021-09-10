import React, { useEffect } from 'react';
import Registration from '../../Components/Home/Registration/Registration';

const RegistrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Registration />
    </>
  );
};

export default RegistrationPage;
