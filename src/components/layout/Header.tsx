import { Login } from '@/components/auth/Login';

export function Header() {
  return (
    <header className="top-0 z-20 w-full fixed flex items-center px-8 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl shadow-lg special-gothic-expanded-one-regular">
          TIME CAPSULE
        </h1>
        <Login />
      </div>
    </header>
  );
}
