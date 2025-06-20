import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg shadow transition-colors duration-200"
    >
      Log In
    </button>
  );
};

export default LoginButton;