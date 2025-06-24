import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { request } from '@/axios_helper';

export default function SignIn() {
  const [componentToShow, setComponentToShow] = useState<'login' | 'welcome' | 'messages'>('login');

  const onLogin = async (e: React.FormEvent, username: string, password: string) => {
    e.preventDefault();
    try {
      await request('POST', '/login', {
        login: username,
        password: password,
      });

      
      setComponentToShow('messages');
    } catch {
      setComponentToShow('welcome');
    }
  };

  const onRegister = async (
    event: React.FormEvent,
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) => {
    event.preventDefault();
    try {
      await request('POST', '/register', {
        firstName: firstName,
        lastName: lastName,
        login: username,
        password: password,
      });
      // Si necesitas guardar el token, puedes hacerlo aquí
      // Por ejemplo: localStorage.setItem('token', response.data.token);
      setComponentToShow('messages');
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
