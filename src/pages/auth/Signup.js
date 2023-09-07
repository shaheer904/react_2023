import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const auth = useSelector((state) => state.auth.isAuthentication);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (auth == true) {
  //     navigate('/');
  //   }
  // }, []);
  return <div>Signup</div>;
};

export default Signup;
