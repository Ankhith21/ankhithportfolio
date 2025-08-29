import React from 'react';
import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "POTHU ANKHITH",
  tagline: "Aspiring Web Developer & Data Scientist",
  intro: "I am an enthusiastic developer eager to apply my skills in user interface design and application development to create meaningful technological solutions. I am passionate about learning and collaborating to build a better future through software engineering.",
  contact: {
    email: "ankhith.pothu@gmail.com",
    phone: "+1 979-324-6252"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/pothu-ankhith-099275254/",
    github: "https://github.com/Ankhith21/ankhithportfolio",
    credly: "https://www.credly.com/users/pothu-ankhith-099275254/badges"
  },
  summary: "An aspiring Web Developer with entry-level experience specializing in user interface design, application development, data security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and develop new features to improve app functionality. As an undergraduate with a strong academic background in Computer science, I am eager to pursue my master's program as I want to explore new frontiers in technology, collaborate with experts in the field, and make a meaningful impact on society through advancements in computing and software engineering.",
  education: [
    {
      institution: "Oklahoma City University",
      degree: "Master's in Data Science",
      duration: "2024-2026"
    },
    {
      institution: "Malla Reddy Institute of Engineering and Technology",
      degree: "Bachelor of Technology - Computer Science and Information Technology",
      duration: "2020 - 2024",
      details: ["Academics: 7.3 CGPA", "Honors: Placement Coordinator"]
    }
  ],
  experience: [
    {
      company: "BRAIN-O-VISION",
      role: "Web Development Boot-camp",
      location: "Hyderabad",
      duration: "Oct 2022 – Nov 2022",
      description: [
        "Implementation in HTML/CSS/AngularJS (frontend) and Node.js (backend) using node and gulp servers.",
        "Experienced with Git and GitHub for efficient code collaboration and version control.",
        "Built a website in 24 hours."
      ]
    }
  ],
  projects: [
    {
      id: "enlight",
      name: "ENLIGHT",
      technologies: "WordPress",
      description: "An online shopping platform designed to provide a seamless and engaging customer experience with robust management tools.",
      longDescription: [
        "ENLIGHT is a fully-functional e-commerce website built on the WordPress platform, customized to create an intuitive and visually appealing online store.",
        "The project involved selecting and configuring themes and plugins to manage products, inventory, and customer orders. It serves as a practical example of deploying a user-friendly shopping solution quickly and efficiently."
      ],
      keyFeatures: ["User-friendly product browsing", "Secure checkout process", "Admin dashboard for store management", "Responsive design for mobile and desktop"],
      repoUrl: "https://github.com/Ankhith21/ankhithportfolio"
    },
    {
      id: "dynamic-web-site",
      name: "DYNAMIC WEB SITE",
      technologies: "SQL, JavaScript, Java",
      description: "A dynamic website with a SQL database backend, featuring secure user authentication with sign-up and login functionality.",
      longDescription: [
        "This project showcases the fundamentals of full-stack web development, integrating a Java-based backend with a dynamic JavaScript frontend.",
        "A key component is the SQL database that securely stores user credentials and session information, implementing core features like user registration, login, and profile management."
      ],
      keyFeatures: ["User registration and login", "Secure password hashing", "Session management", "Dynamic content rendering based on user status"],
      repoUrl: "https://github.com/Ankhith21/ankhithportfolio"
    },
    {
      id: "credit-card-fraud-detection",
      name: "CREDIT CARD FRAUD DETECTION",
      technologies: "Python, Fuzzy Search, Neural Networks",
      description: "A two-stage neuro-fuzzy expert system that detects credit card fraud by analyzing transaction deviations with high accuracy.",
       longDescription: [
        "This project delves into machine learning for financial security. It employs a sophisticated two-stage system to identify potentially fraudulent transactions.",
        "The first stage uses fuzzy clustering to flag suspicious activities, which are then passed to a neural network for deeper analysis against historical data. This hybrid approach enhances detection accuracy and minimizes false positives."
      ],
      keyFeatures: ["Fuzzy clustering for initial screening", "Neural network for in-depth verification", "Transaction deviation analysis", "High-accuracy fraud classification"],
      repoUrl: "https://github.com/Ankhith21/ankhithportfolio"
    },
    {
      id: "online-depression-detection",
      name: "ONLINE DEPRESSION DETECTION",
      technologies: "Python, Support Vector Machine",
      description: "An application that detects depression from user-submitted text, image, or audio, and provides motivational messages.",
      longDescription: [
        "This application is a proof-of-concept for using machine learning in mental health support. It uses a Support Vector Machine (SVM) model to analyze various forms of user input (text, images, audio) for indicators of depression.",
        "Upon detection, the system is designed to provide automated, encouraging messages, demonstrating a potential application of AI for positive social impact."
       ],
       keyFeatures: ["Multi-modal input analysis (text, image, audio)", "SVM-based classification model", "Automated motivational feedback", "Privacy-conscious design"],
      repoUrl: "https://github.com/Ankhith21/ankhithportfolio"
    }
  ],
  certifications: [
    { name: "Python", issuer: "Hacker Rank" },
    { name: "Web Development Bootcamp", issuer: "BRAIN-O-VISION" },
    { name: "Introduction to IoT", issuer: "Cisco" },
    { name: "JavaScript Essentials", issuer: "Cisco" },
    { name: "Google Cloud Essentials", issuer: "Google Cloud Skills Boost" },
    { name: "SQL and Relational Databases", issuer: "Cognitive Class" },
    { name: "JAVA", issuer: "Hacker Rank" },
    { name: "Build and Optimize Data Warehouses with Big Query", issuer: "Google Cloud Skills Boost" },
    { name: "Get Started with API Gateway", issuer: "Google Cloud Skills Boost" }
  ],
  skills: {
    technical: ["Python", "Java", "DBMS", "HTML", "CSS", "JavaScript", "React", "Figma", "MongoDB", "Adobe Lightroom"],
    other: ["Leadership Skills", "Time management"]
  }
};

export const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);
  
export const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
);

export const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const CredlyIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor">
        <title>Credly</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM12 6.811c-2.81 0-5.09 2.279-5.09 5.09s2.28 5.09 5.09 5.09 5.09-2.28 5.09-5.09-2.28-5.09-5.09-5.09zm0 8.58c-1.928 0-3.49-1.562-3.49-3.49s1.562-3.49 3.49-3.49 3.49 1.562 3.49 3.49-1.562 3.49-3.49 3.49zm6.18-8.58c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96z"/>
    </svg>
);

export const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

export const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);
