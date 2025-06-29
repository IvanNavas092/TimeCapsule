import Header from '@/components/layout/Header';
import Sidebar from '../components/Sidebar';
import Particle from '@/components/layout/Background';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-gradient-to-br from-black to-blue-900 pt-24 ">
      <Particle />

      <header className="col-span-2 row-start-1 z-20">
        <Header />
      </header>

      <aside className="row-start-2 z-10">
        <Sidebar />
      </aside>

      {/* Main content - segunda fila, segunda columna */}
      <main className="row-start-2 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

