import { Login } from "../auth/Login";

export function Header() {
  return (
    <header className="top-0 z-20 w-full absolute flex items-center px-8 py-3">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white text-2xl shadow-lg special-gothic-expanded-one-regular">
          TIME CAPSULE
        </h1>
        <Login />
      </div>
    </header>
  );
}
