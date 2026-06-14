import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import { AboutMe } from "./components/AboutMe";
import Experience from "./components/Experience";
import { ProjectSection } from "./components/ProjectSection";
import EducationCertifications from "./components/EducationCertifications";
import { ContactUs } from "./components/contactUs";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="bg-deepBlue flex flex-col w-full h-full font-sora overflow-x-hidden relative">
        <Navbar />
        <HeroSect />
        <CurrentlyBuilding />
        <AboutMe />
        <Experience />
        <ProjectSection />
        <EducationCertifications />
        <ContactUs />
      </div>
      <Analytics />
    </>
  );
}

export default App;
