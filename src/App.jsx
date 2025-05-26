import "./App.css";
import Topbar from "./components/topbar";
import HomeContent from "./components/home-content";
import { ShaderGradientCanvas } from "@shadergradient/react";
import { ShaderGradient } from "@shadergradient/react";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs";
import Projects from "./pages/projects";
import Libraries from "./pages/libraries";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Topbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
