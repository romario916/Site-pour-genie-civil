
import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Team from "./pages/Team";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}









export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/a-propos" element={<About />} />

        <Route path="/services" element={<Services />} />

       <Route path="/realisations" element={<Projects />} />

       <Route path="/realisations/:id" element={<ProjectDetails />} />

       <Route path="/equipe" element={<Team />} />

       <Route path="/partenaires" element={<Partners />} />

       <Route path="/contact" element={<Contact />} />

        <Route path="/mentions-legales" element={<Legal />} />

        
      </Routes>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
