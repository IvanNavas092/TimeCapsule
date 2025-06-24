import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('signin');
  };

  return (
    <button
      onClick={handleOnClick}
      className="group relative px-4 py-2 text-white font-semibold cursor-pointer transition-all duration-100">
      Log In
      <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full"></span>
    </button>
  );
}
