import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import PrivateRoute from '@/routes/guard/PrivateRoute';
import DashboardLayout from '@/components/Dashboard/sections/DashboardLayout';
import Shareds from '@/components/Dashboard/sections/Shareds';
import CreateCapsule from '@/components/Dashboard/sections/CreateCapsule';
import MyCapsules from '@/components/Dashboard/sections/MyCapsules';

function AppRoutes() {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="shareds" element={<Shareds />} />
          <Route path="create-capsule" element={<CreateCapsule />} />
          <Route path="my-capsules" element={<MyCapsules />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
