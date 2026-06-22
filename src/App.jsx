import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Workflow from "./components/Workflow";
import CaseStudies from "./components/CaseStudies";
import ComingSoon from "./components/ComingSoon";

import AutoGlow from "./pages/AutoGlow";
import MemoryExpedition from "./pages/MemoryExpedition";

import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <div className="bg-dots" />

      <ScrollToTop />

      <Routes>

        {/* Portfolio pages — these get the Navbar */}
        <Route element={<Layout />}>
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

          <Route
            path="/coming-soon"
            element={<ComingSoon />}
          />
        </Route>

        {/* Standalone pages — NO Navbar */}
        <Route
          path="/autoglow"
          element={<AutoGlow />}
        />

        <Route
          path="/memory-expedition"
          element={<MemoryExpedition />}
        />

      </Routes>
    </>
  );
}


export default App;