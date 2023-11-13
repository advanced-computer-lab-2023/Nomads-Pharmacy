import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import GuestHome from './pages/Guest/GuestHome'
// import GuestViewPharmacists from './pages/Guest/GuestViewPharmacists';


import AdminHome from './pages/Admin/AdminHome'
import AdminViewPharmacists from './pages/Admin/AdminViewPharmacists';
import AdminViewApprovalPharmacists from './pages/Admin/AdminViewApprovalPharmacists'
import AdminViewAdmins from './pages/Admin/AdminViewAdmins';
import AdminViewPatients from './pages/Admin/AdminViewPatients';
import AdminViewMedicine from './pages/Admin/AdminViewMedicine';
import AdminChangePassword from './pages/Admin/AdminChangePassword';

import PatientHome from './pages/Patient/PatientHome';
import PatientViewMedicine from './pages/Patient/PatientViewMedicine';
import PatientChangePassword from './pages/Patient/PatientChangePassword';

import PharmacistHome from './pages/Pharmacist/PharmacistHome';
import NonApprovedPharmacist from './pages/Pharmacist/NonApprovedPharmacist';
import PharmacistViewMedicine from './pages/Pharmacist/PharmacistViewMedicine';
import MedicineForm from './components/Pharmacist/MedicineForm';
import PharmacistChangePassword from './pages/Pharmacist/PharmacistChangePassword';


import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CheckoutPage from './pages/Patient/CheckoutPage';
import OrdersPage from './pages/Patient/OrdersPage';


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
              path="/admin-change-password"
              element={<AdminChangePassword />}
            />
             <Route
              path="/patient-home"
              element={<PatientHome />}
            />
             <Route
              path="/not-approved-pharmacist"
              element={<NonApprovedPharmacist/>}
            />
             <Route
              path="/patient-view-medicine"
              element={<PatientViewMedicine />}
            />
            <Route
              path="/checkout"
              element={<CheckoutPage />}
            />
             <Route
              path="/orders"
              element={<OrdersPage />}
            />
              <Route
              path="/patient-change-password"
              element={<PatientChangePassword />}
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
              path="/pharmacist-change-password"
              element={<PharmacistChangePassword />}
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
