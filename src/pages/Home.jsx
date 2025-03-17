import React from 'react';
import pro_photo from '../pro_photo.jpeg';
import Typewriter from "typewriter-effect"; // For animated text effect

const Home = () => {
  return (
    <div className="container">
      <div className="row align-items-center min-vh-100">
        {/* Left Side - Hero Text */}
        <div className="col-md-7 d-flex flex-column align-items-center align-items-md-start p-5">
          <h1 className="display-4 text-light fw-bold">
            Hello, I'm <span className="text-highlight">Rakesh</span>
          </h1>

          {/* Animated Typing Effect */}
          <h3 className="text-light">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "Web Developer", "MERN Stack Developer", "DSA Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          {/* Call-to-Action Buttons */}
          <div className="mt-4">
            <a href="Resume.pdf" download className="btn btn-primary me-3">
              📄 View Resume
            </a>
            <a href="#contact" className="btn btn-outline-light">
              📩 Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image (Unchanged) */}
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src={pro_photo}
            alt="profile photo"
            style={{
              border: '5px solid purple',
              boxShadow: '0px 0px 20px rgba(128, 0, 128, 0.7)', // Shadow outside the border
              borderRadius: '50%',
              width: '450px', // Adjust as needed
              height: '450px', // Adjust as needed
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
