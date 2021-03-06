import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Reset from "./screens/resetPassword/Reset";
import Dashboard from "./screens/dashboard/Dashboard";
import LoggedOut from "./screens/loggedOut/LoggedOut";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loggedOut" element={<LoggedOut />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
