import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { request, setAuthToken } from '@/axios_helper';
import Particle from '@/components/layout/Background';
import { useState } from 'react';

function SignIn() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const onLogin = async (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    try {
      await request(
        'POST',
        '/login',
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      ).then((response) => {
        setAuthToken((response.data as { accessToken: string }).accessToken);
      });

      navigate('/');
    } catch (error: unknown) {
      setShowError(true);
      console.log(showError);
      // @ts-expect-error: axios error
      setErrorMessage(error.response.data.message);
      // @ts-expect-error: axios error
      console.log('Error response:', error.response.data.message);
    }
  };

  const onRegister = async (e: React.FormEvent, name: string, email: string, password: string) => {
    e.preventDefault();
    try {
      await request(
        'POST',
        '/register',
        {
          name: name,
          email: email,
          password: password,
        },
        { withCredentials: true }
      ).then((response) => {
        setAuthToken((response.data as { accessToken: string }).accessToken);
      });

      navigate('/');
    } catch (error: unknown) {
      setShowError(true);
      console.log(showError);
      // @ts-expect-error: axios error
      setErrorMessage(error.response.data.message);
      // @ts-expect-error: axios error
      console.log('Error response:', error.response.data.message);
    }
  };

  return (
    <>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900">
        <Particle />
      </div>
      <LoginForm
        onLogin={onLogin}
        onRegister={onRegister}
        errorMessage={errorMessage}
        showError={showError}
        onCloseError={() => setShowError(false)}
      />
    </>
  );
}

export default SignIn;
