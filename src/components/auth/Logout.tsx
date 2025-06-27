import { logOut } from '@/axios_helper';

function Logout() {
  const handleOnClick = () => {
    logOut(); 
  };

  return (
    <button
      onClick={handleOnClick}
      className="group relative px-4 py-2 text-white font-semibold cursor-pointer transition-all duration-100">
      Log Out
      <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-white transition-all duration-200 group-hover:w-full"></span>
    </button>
  );
}

export default Logout;
