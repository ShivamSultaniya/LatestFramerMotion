import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import only motion
import { cubicBezier } from "framer-motion"
import "../sass/main.scss";

// Components
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Loader from "../components/Loader.jsx";
import Example from "../components/Scroll.jsx";
import CustomCursor from "../components/CustomCursor.jsx";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    loading ? body.classList.add("loading") : body.classList.remove("loading");
  }, [loading]);

  return (
    <motion.div layout className="app"> {/* Wrap everything in motion.div with layout */}
      <CustomCursor />
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
          <div className="transition-image final">
            <motion.img
              src={"/images/models.jpg"} // Use forward slash for path
              alt="boo"
              layoutId="main-image-1"
              variants={{
                // Define variants directly for better organization
                visible: { opacity: 1, scale: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.6 } },
                hidden: { opacity: 0, scale: 0 },
              }}
              initial="hidden" // Set initial state
              animate={!loading ? "visible" : "hidden"} // Animate based on loading state
            />
          </div>
          <Example />
        </>
      )}
    </motion.div>
  );
}

export default Home;
