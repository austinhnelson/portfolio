import { useEffect, useState, useMemo } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function TitleBar() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(
    () => ["home", "about", "experience", "projects"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          return {
            id: sectionId,
            offsetTop: sectionElement.offsetTop,
            offsetBottom:
              sectionElement.offsetTop + sectionElement.offsetHeight,
          };
        }
        return null;
      });

      const currentScrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sectionOffsets.find(
        (section) =>
          section &&
          currentScrollPosition >= section.offsetTop &&
          currentScrollPosition <= section.offsetBottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const activeIndex = sections.indexOf(activeSection);

  const ScrollIndicator = () => {
    return (
      <div className="w-full flex pl-8">
        <div className="flex space-x-4">
          {sections.map((section, index) => (
            <div key={section} className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full ${
                  index <= activeIndex ? "bg-primary-accent" : "bg-gray-400"
                }`}
              />

              {index < sections.length - 1 && (
                <div
                  className={`h-1 ${
                    index < activeIndex ? "bg-primary-accent" : "bg-gray-400"
                  } w-20 mx-4`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="sticky top-0 left-0 w-full pt-10 pb-5 text-white z-50 bg-background-color">
        <div className="container mx-auto flex flex-col items-center">
          <nav className="flex justify-between w-full">
            <ul className="flex space-x-20 text-xl">
              <li>
                <a href="#home" className="hover:text-primary-accent">
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-accent">
                  about
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-accent">
                  experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-accent">
                  projects
                </a>
              </li>
            </ul>
            {/* Social Media Cards on the Right */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/austinhnelson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:text-primary-accent transition"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/austinhnelson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:text-primary-accent transition"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="mailto:nelsonhaustin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:text-primary-accent transition"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </nav>
          <ScrollIndicator />
        </div>
      </div>
    </>
  );
}

export default TitleBar;
