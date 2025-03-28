import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3, FaJs, FaBootstrap} from 'react-icons/fa';
import { SiFlask } from "react-icons/si";
import { SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3 />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
  { name: "React.js", icon: <FaReact />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Express.js", icon: <SiExpress />, level: 85 },
  { name: "MongoDB", icon: <FaDatabase />, level: 80 },
  { name: "Python", icon: <FaPython />, level: 80 },
  {name:'Flask', icon:<SiFlask />,level:70}
];

const Skills = () => {
  return (
    <div className="container py-5">

      {/* Skills Section */}
      <h2 className="text-center fw-bold mb-4">My Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="d-flex align-items-center">
              <span className="me-2 text-warning" style={{ fontSize: '24px' }}>{skill.icon}</span>
              <span className="fw-bold">{skill.name}</span>
            </div>
            <motion.div 
              className="progress mt-2" 
              style={{ height: '8px', background: '#222' }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2 }}
            >
              <div className="progress-bar bg-success" style={{ width: `${skill.level}%` }}></div>
            </motion.div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
