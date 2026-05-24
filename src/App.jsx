import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import CaseStudies from "./components/CaseStudies";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <div className="bg-dots" />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Workflow />
              <CaseStudies />
            </>
          }
        />

        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;