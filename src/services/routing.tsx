import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../authentication/login";
import Signup from "../authentication/signup";
import Dashboard from "../layout/dashboard";
import AdminDashboard from "../layout/adminDashboard"

export default function Routing(){
    return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
    );
}