import SidebarItem from './SidebarItem';
import { itemsSidebar } from '@/utils/lists';

const Sidebar = ({isOpen, setIsOpen,}: {isOpen: boolean; setIsOpen: (open: boolean) => void; }) => {
  return (
    <>
      

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 w-64 h-full text-white transform transition-transform duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-full flex flex-col p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold px-4 ">Mi Panel</h2>
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto space-y-4">
            {itemsSidebar.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
