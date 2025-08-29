import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { resumeData } from './constants';
import type { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects/')) {
        const projectId = hash.split('/')[2];
        const project = resumeData.projects.find(p => p.id === projectId);
        document.title = project ? `${project.name} - Ankhith Pothu` : 'Ankhith Pothu - Portfolio';
        setSelectedProject(project || null);
      } else {
        document.title = 'Ankhith Pothu - Portfolio';
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange(); // Check hash on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);


  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen font-sans">
       {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : (
        <>
          <Navbar />
          <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl">
            <main className="mt-8 space-y-16">
              <Hero
                name={resumeData.name}
                tagline={resumeData.tagline}
                intro={resumeData.intro}
                contact={resumeData.contact}
                socials={resumeData.socials}
              />
              <Summary content={resumeData.summary} />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <Experience experiences={resumeData.experience} />
                  <Projects projects={resumeData.projects} />
                </div>
                <div className="space-y-12">
                  <Education education={resumeData.education} />
                  <Certifications 
                    certifications={resumeData.certifications} 
                    credlyUrl={resumeData.socials.credly}
                  />
                  <Skills skills={resumeData.skills} />
                </div>
              </div>

              <Contact contact={resumeData.contact} socials={resumeData.socials} />
            </main>
            <Footer name={resumeData.name} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
