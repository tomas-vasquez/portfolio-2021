import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import Intro from "pages/Home/Intro";
import Profile from "pages/Home/Profile";
import Footer from "components/Footer";

import iphone11 from "assets/iphone-11.glb";
import macbookPro from "assets/macbook-pro.glb";
import "./index.css";

import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);

  const intro = useRef();
  const details = useRef();

  useEffect(() => {
    const revealSections = [intro, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );

    revealSections.forEach((section) => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className="home">
      <Helmet>
        <title>Tomas Vasquez</title>
        <meta
          name="description"
          content="developer portfolio of Tomas Vasquez"
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet>

      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Projects id="projects" />

      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
