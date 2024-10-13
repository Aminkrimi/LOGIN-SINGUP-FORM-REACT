// import "./App.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace  to='Signup' />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
