import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleSidebar() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  function goBack() {
    navigate('/');
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-black to-blue-900 ">
      {/* go to back */}

      <button onClick={goBack} className="fixed m-6 cursor-pointer flex z-20">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
        <p className="text-white ml-2 font-bold">Back to Home</p>
      </button>
      {/* menu hamburger */}
      {!isOpen && (
        <button onClick={handleSidebar} className="fixed md:hidden m-6 top-12 cursor-pointer flex z-20">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
      )}
      {/* sidebar */}
      <aside className="mt-24 z-20">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>

      {/* main content */}
      <main className="row-start-2  overflow-y-auto p-6 z-10 w-full">
        <Outlet />
      </main>
    </div>
  );
}
