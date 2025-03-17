import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black text-light py-5">
      <div className="container text-center">
        {/* About Me Title */}
        <motion.h2
          className="display-4 fw-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <strong>Rakesh</strong>, a dedicated <strong>Full Stack Developer</strong> 
          with a passion for building scalable and efficient web applications.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="card bg-dark text-light p-4 mb-4 shadow border-light"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="h4 mb-3">Skills & Expertise</h3>
          <p className="fs-5">
            <strong>Frontend:</strong> React.js, HTML, CSS, JavaScript, Bootstrap  
            <br />
            <strong>Backend:</strong> Node.js, Express.js, MongoDB 
            <br />
            <strong>Other:</strong> Git, AWS, REST APIs, EJS 
          </p>
        </motion.div>

        {/* Experience & Projects */}
        <motion.div
          className="card bg-dark text-light p-4 mb-4 shadow border-light"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="h4 mb-3">Experience & Projects</h3>
          <ul className="list-unstyled text-start mx-auto fs-5" style={{ maxWidth: "700px" }}>
            <li>📌 Built a Spam Email Classifier</li>
            <li>📌 Developed a Weather App fetching real-time data</li>
            <li>📌 Created a Movie Database App with API integration</li>
            <li>📌 Developed an Application  on Mentor Connect – a hackthon project</li>
          </ul>
        </motion.div>

        {/* Goals */}
        <motion.div
          className="card bg-dark text-light p-4 mb-4 shadow border-light"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="h4 mb-3">My Goal</h3>
          <p className="fs-5">
            I aim to become a <strong>Full Stack Developer</strong>, 
            continuously learning and improving my skills to build secure and scalable applications.
          </p>
        </motion.div>

        {/* Connect Button */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#contact"
            className="btn btn-light btn-lg fw-bold px-4 py-2"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
