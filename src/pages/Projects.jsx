import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spam Email Classifier & Mail Summarizer",
    description: "A machine learning model to classify spam emails.",
    image: "/images/spam.png",
    github: "https://github.com/Rakesh-satyavarapu/MiniProject",
    demo: "",
    video: "",
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data using an API.",
    image: "/images/weather-app.png",
    github: "https://github.com/Rakesh-satyavarapu/PRODIGY_WD_05",
    demo: "",
    video: "/videos/weather-app.mp4",
  },
  {
    title: "Movie Database App",
    description: "Retrieves movie details with secure API integration.",
    image: "/images/movieBD.png",
    github: "https://github.com/Rakesh-satyavarapu/WD-Film_Finder",
    demo: "https://rakesh-satyavarapu.github.io/WD-Film_Finder/",
    video: "/videos/movieDB.mp4",
  },
  {
    title: "Mentor Connect",
    description: "A platform connecting mentors and mentees.",
    image: "/images/mentor-connect.png",
    github: "https://github.com/Rakesh-satyavarapu/WebAstra",
    demo: "",
    video: "/videos/Mentor.mp4",
  },
  {
    title: "Calculator",
    description: "This application capable of performing basic arithmetic operations",
    image: "/images/calculator.png",
    github: "https://github.com/Rakesh-satyavarapu/WebAstra",
    demo: "",
    video: "/videos/calculator.mp4",
  },
  {
    title: "Age Calculator",
    description: "This application is to know age of a person in terms of years, months and days",
    image: "/images/age.png",
    github: "https://github.com/Rakesh-satyavarapu/WebAstra",
    demo: "https://rakesh-satyavarapu.github.io/AgeCal/",
    video: "/videos/age.mp4",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-light py-5">
      <div className="container text-center">
        {/* Title */}
        <motion.h2
          className="display-4 fw-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card bg-dark text-light p-3 shadow-lg">
                {/* Project Image or Video */}
                {project.video ? (
                  <video
                    src={project.video}
                    controls
                    className="card-img-top rounded"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top rounded"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                )}

                {/* Project Details */}
                <div className="card-body">
                  <h3 className="h5">{project.title}</h3>
                  <p className="small">{project.description}</p>
                  <div className="d-flex justify-content-center">
                    <a
                      href={project.github}
                      className="btn btn-outline-light me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
