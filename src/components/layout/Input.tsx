import React from 'react';

interface LoginInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  togglePassword?: () => void;
}

const LoginInput = React.memo(
  ({
    name,
    label,
    type,
    placeholder,
    value,
    onChange,
    showPassword,
    togglePassword,
  }: LoginInputProps) => {
    const inputType = type === 'password' && !showPassword ? 'password' : 'text';
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="font-bold text-md mb-1">
          {label}
        </label>
        <div className="relative w-full">
          <input
            type={inputType}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border-b border-gray-700 bg-transparent py-2 px-1 focus:outline-none focus:border-white transition"
            required
          />
          {type === 'password' && togglePassword && (
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              type="button"
              onClick={togglePassword}>
              {showPassword ? (
                <svg
                  className="w-5 h-5 text-gray-300 "
                  aria-hidden="true"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
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
                    d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default LoginInput;
