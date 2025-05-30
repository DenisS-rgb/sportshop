import { Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <TopNavbar />
            <MainNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
