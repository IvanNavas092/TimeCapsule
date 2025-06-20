import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg shadow transition-colors duration-200"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;