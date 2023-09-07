import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/api/auth.api';
import { setToken } from '../../redux/slicer/auth.slicer';
import SocialButton from '../../components/SocialButton';
const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthentication);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (auth === true) {
  //     navigate('/');
  //   }
  // }, [auth]);

  const onSubmit = async (email, password) => {
    try {
      const data = await login(email, password);
      dispatch(setToken({ token: data.token, user: data.user }));
    } catch (err) {
      console.log(err);
    }
  };
  const handleSocialLogin = (user) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  return (
    <div>
      Login
      <SocialButton
        provider="facebook"
        appId="YOUR_APP_ID"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>
    </div>
  );
};

export default Login;
