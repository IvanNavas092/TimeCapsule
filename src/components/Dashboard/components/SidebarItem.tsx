import { NavLink } from 'react-router-dom';

export interface SidebarItemProps {
  icon: React.ReactNode;
  name: string;
  to: string;
}

const SidebarItem = ({ icon, name, to }: SidebarItemProps) => {
  return (
    <NavLink
    to={to}
    className={({ isActive }) =>
      `flex justify-between items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-300 mx-2 hover:text-black ${
        isActive ? 'bg-blue-900 font-semibold' : ''
      }`
    }>
    <div className="flex items-center gap-3">
      <span className="w-5 h-5">{icon}</span>
      <span>{name}</span>
    </div>
  
    <svg
      className="w-3 h-3 "
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  </NavLink>
  
  );
};

export default SidebarItem;
