import LoginInput from './components/Input';
import { useLoginForm } from './hooks/useLoginForm';

interface LoginFormProps {
  onLogin: (e: React.FormEvent, email: string, password: string) => void;
  onRegister: (e: React.FormEvent, name: string, email: string, password: string) => void;
}

const LoginForm = ({ onLogin, onRegister }: LoginFormProps) => {
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

  return (
    <>
      <div className="relative min-h-screen grid  place-items-center text-white px-4">
        {/* Form */}
        <div className="flex flex-col h-full items-center justify-center">
          <h2 className="text-5xl font-bold mb-3 title-font">Time Capsule</h2>
          <p className="text-sm text-blue-300 mb-20">Shaping the perfect space</p>

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
