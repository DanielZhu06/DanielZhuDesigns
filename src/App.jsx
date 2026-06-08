import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import CaseStudies from "./components/CaseStudies";
import ComingSoon from "./components/ComingSoon";
import AutoGlow from "./pages/AutoGlow";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="bg-dots" />
      <Navbar />
      <ScrollToTop />

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
        <Route path="/autoglow" element={<AutoGlow />} />
      </Routes>
    </>
  );
}

export default App;