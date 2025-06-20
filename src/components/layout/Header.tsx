import Profile from '../auth/Profile';
import LoginButton from '../auth/Login';
import LogoutButton from '../auth/Logout';

export function Header() {
  return (
    <header className="top-0 z-20 w-full absolute flex items-center px-8 py-3">
      <div className="flex flex-1 items-center justify-end gap-4 ">
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
    </header>
  );
}
