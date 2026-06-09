import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Projects/>
      <Languages/>
      <Certificates/>
      <Contact/>
    </>
  );
}

export default App;