// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from './components/Input';
import { useLoginForm } from './hooks/useLoginForm';

interface LoginFormProps {
  onLogin: (e: React.FormEvent, email: string, password: string) => void;
  onRegister: (e: React.FormEvent, name: string, email: string, password: string) => void;
  errorMessage?: string;
  showError?: boolean;
  onCloseError?: () => void;
}

const LoginForm = ({
  errorMessage,
  showError,
  onLogin,
  onRegister,
  onCloseError,
}: LoginFormProps) => {
  const {
    activeTab,
    showPassword,
    formData,
    fields,
    toggleTab,
    togglePassword,
    handleChange,
    handleSubmit,
  } = useLoginForm(onLogin, onRegister);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className="relative min-h-screen grid  place-items-center text-white px-4">
        <button onClick={handleOnClick} className="absolute top-0 left-0 p-8 cursor-pointer flex">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className='ml-2 font-bold'>Back to Home</span>
        </button>

        <div className="flex flex-col h-full items-center justify-center ">
          <h2 className="text-5xl font-bold mb-3 logo-font">TIME CAPSULE</h2>
          <p className="text-sm text-blue-300 mb-20">Shaping the perfect space</p>

          {showError && (
            <div className="relative bg-red-500/30 w-full text-sm rounded-full text-center my-2 py-2 px-4">
              <button
                onClick={onCloseError}
                className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 flex items-center justify-center text-white w-6 h-6 p-0"
                style={{ lineHeight: 0 }}>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p>
                Error: <span className="font-bold inline">{errorMessage}</span>
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10 w-full max-w-md">
            {fields.map(({ name, label, type, placeholder }) => (
              <div className="flex flex-col" key={name}>
                <div className="relative w-full">
                  <LoginInput
                    key={name}
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    showPassword={showPassword}
                    togglePassword={togglePassword}
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 rounded-full font-semibold">
              {activeTab === 'login' ? 'Log In' : 'Register'}
            </button>
          </form>

          <p className="mt-12 text-sm text-white w-full max-w-md">
            {activeTab === 'login' ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={toggleTab}
              className="ml-2 px-2 py-1 border border-white rounded-full text-white hover:bg-white hover:text-black transition cursor-pointer"
              type="button">
              {activeTab === 'login' ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
