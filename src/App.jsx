import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./MyComponents/HomePage";
import PopularPlacesPage from "./MyComponents/PopularPlacesPage";
import ContactPage from "./MyComponents/ContactPage";
import RegisterPage from "./MyComponents/RegisterPage";
import CurrentDealsPage from "./MyComponents/CurrentDealsPage";
import LoginPage from "./MyComponents/LoginPage";
import AboutPage from "./MyComponents/AboutPage";
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popular" element={<PopularPlacesPage />} />
        <Route path="/deals" element={<CurrentDealsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;