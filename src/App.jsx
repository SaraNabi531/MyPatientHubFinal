import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FindDoctor from "./pages/FindDoctor";
import FindClinic from "./pages/FindClinic";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/find-doctor"
        element={<FindDoctor />}
      />

      <Route
        path="/find-clinic"
        element={<FindClinic />}
      />

    </Routes>
  );
}

export default App;