import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center gap-2 px-3 py-1 rounded-lg">
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-8 h-8 rounded-full border-2 border-white shadow"
        />
      </div>
    )
  );
};

export default Profile;
