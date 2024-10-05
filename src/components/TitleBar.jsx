import { useEffect, useState, useMemo } from "react";

function TitleBar() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(
    () => ["home", "about", "experience", "projects"],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.99 }
    );

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, [sections]);

  const activeIndex = sections.indexOf(activeSection);

  const ScrollIndicator = () => {
    return (
      <div className="w-full flex justify-center items-center mt-4">
        <div className="flex justify-center items-center space-x-4">
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
      <header className="fixed top-0 left-0 w-full pt-10 pb-5 text-white z-50 bg-background-color">
        <div className="container mx-auto flex flex-col items-center">
          <nav>
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
          </nav>
          <ScrollIndicator />
        </div>
      </header>
    </>
  );
}

export default TitleBar;
