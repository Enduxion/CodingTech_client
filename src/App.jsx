// library imports
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages import
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Course from "./pages/Course/Course";
import AddCourse from "./AddCourses";
import Courses from "./pages/Courses/Courses";
import Gallery from "./pages/Gallery/Gallery";
import { AnimatePresence } from "framer-motion";

// Components import

// Functions import

export default function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/addCourse" element={<AddCourse />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}