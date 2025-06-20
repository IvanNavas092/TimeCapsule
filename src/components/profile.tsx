import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center gap-2 bg-[var(--color-tertiary)]/60 px-3 py-1 rounded-lg">
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-8 h-8 rounded-full border-2 border-amber-400 shadow"
        />
        <div className="flex flex-col">
          <span className="text-white text-sm font-semibold leading-tight">{user?.name}</span>
          <span className="text-gray-300 text-xs leading-tight">{user?.email}</span>
        </div>
      </div>
    )
  );
};

export default Profile;