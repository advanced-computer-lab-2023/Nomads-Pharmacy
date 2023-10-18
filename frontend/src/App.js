import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import GuestHome from './pages/Guest/GuestHome'
// import GuestViewPharmacists from './pages/Guest/GuestViewPharmacists';


import AdminHome from './pages/Admin/AdminHome'
import AdminViewPharmacists from './pages/Admin/AdminViewPharmacists';
import AdminViewApprovalPharmacists from './pages/Admin/AdminViewApprovalPharmacists'
import AdminViewAdmins from './pages/Admin/AdminViewAdmins';
import AdminViewPatients from './pages/Admin/AdminViewPatients';
import AdminViewMedicine from './pages/Admin/AdminViewMedicine';

import PatientHome from './pages/Patient/PatientHome';
import PatientViewMedicine from './pages/Patient/PatientViewMedicine';

import PharmacistHome from './pages/Pharmacist/PharmacistHome';
import PharmacistViewMedicine from './pages/Pharmacist/PharmacistViewMedicine';
import MedicineForm from './components/Pharmacist/MedicineForm';


import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/admin-home"
              element={<AdminHome />}
            />
            <Route
              path="/admin-view-pharmacists"
              element={<AdminViewPharmacists />}
            />
            <Route
              path="/admin-view-approval-pharmacists"
              element={<AdminViewApprovalPharmacists />}
            />
            <Route
              path="/admin-view-admins"
              element={<AdminViewAdmins />}
            />
            <Route
              path="/admin-view-patients"
              element={<AdminViewPatients />}
            />
            <Route
              path="/admin-view-medicine"
              element={<AdminViewMedicine />}
            />
             <Route
              path="/patient-home"
              element={<PatientHome />}
            />
             <Route
              path="/patient-view-medicine"
              element={<PatientViewMedicine />}
            />
             <Route
              path="/pharmacist-home"
              element={<PharmacistHome/>}
            />
             <Route
              path="/pharmacist-view-medicine"
              element={<PharmacistViewMedicine />}
            />
              <Route
              path="/medicine-form"
              element={<MedicineForm />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
