export interface BoxProps {
  avatar?: string;
  name: string;
  email: string;
}

const UserInfo = ({ avatar, name, email }: BoxProps) => (
  <div className="relative flex flex-row items-center gap-3 p-4 rounded-3xl bg-white/10 shadow-2xl">
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white/30 overflow-hidden">
      <span className="text-3xl text-white drop-shadow-lg">{avatar}</span>
    </div>

    <div className="flex flex-col justify-center flex-1">
      <h2 className="text-white font-bold text-base">{name}</h2>
      <p className="text-sm text-cyan-100">{email}</p>
    </div>
  </div>
);

export default UserInfo;
