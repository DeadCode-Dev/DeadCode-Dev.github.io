import ContactMe from "@/components/ContactMe";
import WorkExperience from "@/components/Experience";
import Home from "@/components/Home";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <Home />
      <Skills />
      <MyProjects />
      <WorkExperience />
      <ContactMe />
    </>
  );
}
