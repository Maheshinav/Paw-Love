import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/Nav/nav";
import HeroSection from './components/Hero/hero';
import Login from './components/Login/login';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
	return (
  <BrowserRouter> 
            <Header />
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
