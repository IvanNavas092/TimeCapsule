import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { request, setAuthToken } from '@/axios_helper';

function SignIn() {
  const [componentToShow, setComponentToShow] = useState<'login' | 'welcome' | 'messages'>('login');
  const navigate = useNavigate();

  const onLogin = async (e: React.FormEvent, username: string, password: string) => {
    e.preventDefault();
    try {
      await request('POST', '/login', {
        login: username,
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
    username: string,
    password: string
  ) => {
    event.preventDefault();
    try {
      await request('POST', '/register', {
        name: name,
        email: email,
        login: username,
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
      {componentToShow === 'login' && <LoginForm onLogin={onLogin} onRegister={onRegister} />}
      {/* Puedes agregar aquí otras vistas según el valor de componentToShow */}
    </>
  );
}

export default SignIn;
