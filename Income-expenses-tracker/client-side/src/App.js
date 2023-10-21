import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login1 from "./components/Forms/Login1";
import Register from "./components/Forms/Register";
import Navbar from "./components/NavBar/Navbar";
import AddTransaction from "./components/Forms/AddTransaction";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
