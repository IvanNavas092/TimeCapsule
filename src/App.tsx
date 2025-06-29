import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import Particle from './components/layout/Background';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <div
        className="absolute w-full overflow-x-hidden  ">
        <Particle />
        <AppRoutes />
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
