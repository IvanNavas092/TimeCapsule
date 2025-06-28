import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import Particle from './components/layout/Background';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <div
        className="absolute w-full overflow-x-hidden inset-0 bg-gradient-to-b from-black via-black to-[var(--color-secondary)]">
        <Particle />
      </div>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
