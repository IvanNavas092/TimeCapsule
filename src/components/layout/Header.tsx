import Login from '@/components/auth/Login';
import Logout from '@/components/auth/Logout';
import { useAuth } from '@/hooks/AuthContext';
import UserInfo from './userInfoCard';

function Header() {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="top-0 z-20 w-full fixed flex items-center px-8 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl shadow-lg logo-font">TIME CAPSULE</h1>
        {isLoggedIn && user ? (
          <div className="flex flex-row">
            <UserInfo avatar={user.avatar ?? undefined} name={user.name} email={user.email} />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </header>
  );
}

export default Header;
