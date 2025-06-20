import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="px-4 py-2  hover:underline text-white font-semibold rounded-lg shadow transition-colors duration-200"
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
