import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import Admin from "./pages/Admin";
import PaymentGateway from "./pages/PaymentGateway";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment" element={<PaymentGateway />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
