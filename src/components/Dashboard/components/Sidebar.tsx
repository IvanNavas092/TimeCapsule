import SidebarItem from './SidebarItem';
import type { SidebarItemProps } from './SidebarItem';
const basePath = "/dashboard"
const items: SidebarItemProps[] = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
      </svg>
    ),
    name: 'Inicio',
    to: `${basePath}/intro`,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" />
      </svg>
    ),
    name: 'Crear',
    to: `${basePath}/create-capsule`,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 z-20 min-h-[550px] relative mt-3 border-r p-4 text-white">
      <h2 className="text-xl font-bold mb-6">Mi Panel</h2>
      <nav className="flex flex-col gap-4">
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}

      </nav>
    </aside>
  );
};

export default Sidebar;
