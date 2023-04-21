import React, { Suspense, useEffect, useRef, useState } from "react";
import { Navbar, Footer, Loading } from "./components";
import { Home, About, Contact, Skills, Portfolio } from "./pages";
import { motion } from "framer-motion";

const App = () => {
  const pages = [
    { id: "home", component: <Home /> },
    { id: "about", component: <About /> },
    { id: "portfolio", component: <Portfolio /> },
    { id: "skills", component: <Skills /> },
    { id: "contact", component: <Contact /> },
  ];

  // set element id when scrolling for highlighted navbar
  const [activePageId, setActivePageId] = useState(pages[0].id);
  const observerRefs = useRef([]);

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActivePageId(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    pages.forEach((page) => {
      const ref = observerRefs.current[page.id];
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pages, observerRefs]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navbar observerRefs={observerRefs} activePageId={activePageId} />
        <div>
          {/* set loading screen on the page if they're not loaded yet */}
          {pages.map((page, index) =>
            index === 0 ? (
              <motion.div
                key={page.id}
                id={page.id}
                ref={(ref) => (observerRefs.current[page.id] = ref)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                {page.component}
              </motion.div>
            ) : (
              <motion.div
                key={page.id}
                id={page.id}
                ref={(ref) => (observerRefs.current[page.id] = ref)}
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                {page.component}
              </motion.div>
            )
          )}
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
