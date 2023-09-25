import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./login";
import Signup from "./signup";
import Dashboard from "./dashboard";
import AdminDashboard from "./adminDashboard"

function App() {
  return (
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


export default App;