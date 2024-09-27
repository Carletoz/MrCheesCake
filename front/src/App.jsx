import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./views/products/Products";
import Footer from "./components/footer/Footer";
import Landing from "./views/landing/Landing";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
