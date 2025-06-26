import LoginInput from './components/Input';
import { useLoginForm } from './hooks/useLoginForm';

interface LoginFormProps {
  onLogin: (e: React.FormEvent, email: string, password: string) => void;
  onRegister: (e: React.FormEvent, name: string, email: string, password: string) => void;
}

<<<<<<< HEAD
const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(e, email, password);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(e, name, email, password);
  };
=======
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
>>>>>>> main

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
<<<<<<< HEAD
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="loginPassword"
                className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-200">
              Sign in
            </button>
          </form>
        )}
        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="registerPassword"
                className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="registerPassword"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-200">
              Sign up
            </button>
          </form>
        )}
=======
>>>>>>> main
      </div>
    </>
  );
};

export default LoginForm;
