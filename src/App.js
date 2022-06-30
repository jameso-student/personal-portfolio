import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/AboutPage/About";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/ProjectsPage/Projects";
import Resume from "./components/ResumePage/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;