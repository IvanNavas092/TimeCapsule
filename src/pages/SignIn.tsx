import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { request, setAuthToken } from '@/axios_helper';
import Particle from '@/components/layout/Background';

function SignIn() {
  const [componentToShow, setComponentToShow] = useState<'login' | 'welcome' | 'messages'>('login');
  const navigate = useNavigate();

  const onLogin = async (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    try {
      await request('POST', '/login', {
        email: email,
        password: password,
      }).then((response) => {
        setAuthToken((response.data as { token: string }).token);
      });

      navigate('/');
    } catch {
      setComponentToShow('welcome');
    }
  };

  const onRegister = async (
    event: React.FormEvent,
    name: string,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    try {
      await request('POST', '/register', {
        name: name,
        email: email,
        password: password,
      }).then((response) => {
        setAuthToken((response.data as { token: string }).token);
      });

      navigate('/');
    } catch {
      setComponentToShow('welcome');
    }
  };

  return (
    <>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900">
        <Particle />
      </div>
      {componentToShow === 'login' && <LoginForm onLogin={onLogin} onRegister={onRegister} />}
    </>
  );
}

export default SignIn;
