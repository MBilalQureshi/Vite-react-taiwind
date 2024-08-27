import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
// import Dashboard from "./pages/dashboard/Dashboard";
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Maps from './pages/Maps';


// Tailwind CSS Style Sheet
// import './assets/styles/tailwind.css';//../assets/styles/tailwind.css
function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/tables" element={<Tables />} />
          <Route exact path="/maps" element={<Maps />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
  );
}

export default App;
