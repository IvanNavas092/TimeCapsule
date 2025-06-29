import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import PrivateRoute from '@/routes/guard/PrivateRoute';
import DashboardLayout from '@/components/Dashboard/sections/DashboardLayout';
import Intro from '@/components/Dashboard/sections/Intro';
import CreateCapsule from '@/components/Dashboard/sections/CreateCapsule';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Privates */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path='intro' element={<Intro />} />
          <Route path='create-capsule' element={<CreateCapsule />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
