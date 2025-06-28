import { useAuth } from '@/hooks/AuthContext';

export interface BoxProps {
  avatar?: string;
  name: string;
  email: string;
}

const UserInfo = ({ avatar, name, email }: BoxProps) => {
  const { logout } = useAuth();
  const handleClick = () => {
    logout();
  };

  return (
    <div className="relative flex flex-row items-center gap-3 p-3 rounded-3xl bg-white/10 shadow-2xl">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white/30 overflow-hidden">
        <span className="text-3xl text-white drop-shadow-lg">{avatar}</span>
      </div>
      <div className="flex flex-col justify-center ">
        <h2 className="text-white font-bold text-base">{name}</h2>
        <p className="text-sm text-cyan-100">{email}</p>
        <button onClick={handleClick} className="text-white underline cursor-pointer text-start ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
