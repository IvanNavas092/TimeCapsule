import { NavLink } from "react-router-dom";

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
        `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 mx-2 hover:text-black ${
          isActive ? "bg-blue-900  font-semibold mx-2" : ""
        }`
      }
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{name}</span>

    </NavLink>
  );
};

export default SidebarItem;
