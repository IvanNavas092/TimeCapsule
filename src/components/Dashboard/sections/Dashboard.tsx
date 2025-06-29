import Header from '@/components/layout/Header';
import Sidebar from '../components/Sidebar';
import Particle from '@/components/layout/Background';

function Dashboard() {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-gradient-to-br from-black to-blue-900">
      {/* Fondo de partículas */}
      <Particle />
      
      {/* Header - ocupa toda la primera fila */}
      <header className="col-span-2 row-start-1 z-20">
        <Header />
      </header>
      
      {/* Sidebar - segunda fila, primera columna */}
      <aside className="row-start-2 z-10">
        <Sidebar />
      </aside>
      
      {/* Main content - segunda fila, segunda columna */}
      <main className="row-start-2 overflow-y-auto p-6">
        <p className='text-3xl bg-amber-300'>Contenido principal aquContenido principal aquíContenido principal aquíContenido principal aquíContenido principal aquíí</p>
      </main>
    </div>
  );
}

export default Dashboard;