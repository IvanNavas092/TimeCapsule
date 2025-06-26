import Login from '@/components/auth/Login';
import Logout from '@/components/auth/Logout';

import { isLoggedIn } from '@/axios_helper';

function Header() {
  return (
    <header className="top-0 z-20 w-full fixed flex items-center px-8 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl shadow-lg title-font">
          TIME CAPSULE
        </h1>
        {isLoggedIn() && <Logout />}
        {!isLoggedIn() && <Login />}
      </div>
    </header>
  );
}

export default Header;
