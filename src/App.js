import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import DotGroup from "./components/DotGroup";
import Navbar from "./components/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue space-y-1">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={selectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full border">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <AboutMe setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full border">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full border">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full border">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <ContactMe />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
