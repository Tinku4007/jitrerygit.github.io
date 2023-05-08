import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RobotrixSlider from "./components/RobotrixSlider";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BuyWithPrime from "./pages/BuyWithPrime";
import Contact from "./pages/Contact";
import Dinomanics from "./pages/Dinomanics";
import Home from "./pages/Home";
import Robotryix from "./pages/Robotryix";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buywithprime" element={<BuyWithPrime />} />
          <Route path="/robotryix" element={<Robotryix />} />
          <Route path="/dinomainiacs" element={<Dinomanics />} />
          <Route path="/blog-page" element={<Blog />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
