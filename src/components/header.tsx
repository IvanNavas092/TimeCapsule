import Profile from "./profile";
import LoginButton from "./login";
import LogoutButton from "./logout";

export function Header() {
  return (
    <header className="top-0 z-20 w-full absolute flex items-center px-8 py-3">
      {/* Logo y nombre */}
      {/* Botones y perfil */}
      <div className="flex flex-1 items-center justify-end gap-4 ">
        <LoginButton /> 
        <LogoutButton />
        <Profile />
      </div>
    </header>
  );
}
