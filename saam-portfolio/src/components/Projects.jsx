import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Individual', 'Group', 'Research'];

  const projects = [
    {
      title: 'Real-Time Malicious URL Detection Browser Extension',
      category: 'Research',
      type: 'Research',
      description: 'Chromium-compatible browser extension using heuristic analysis, NLP, Random Forest model, and Explainable AI (LIME) for transparent threat detection and decision-making.',
      tags: ['JavaScript', 'Python', 'Machine Learning', 'Explainable AI', 'NLP'],
      status: 'Ongoing'
    },
    {
      title: 'Video Conference Web App',
      category: 'Full Stack',
      type: 'Individual',
      description: 'MERN stack application enabling real-time, peer-to-peer video communication via WebRTC with secure user authentication and dynamic room management.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Express.js'],
      liveDemo: 'https://www.linkedin.com/posts/nawra-sama-b964142bb_mernstack-webrtc-realtimecommunication-activity-7385335326229147648-9rK4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzFEqIBeDFY2sU9WjHz_JVLDX1QjlaVGXw',
      github: 'https://github.com/nawrasama/video-conference-webapp'
    },
    {
      title: 'Freshmart - Online Grocery Store',
      category: 'Full Stack',
      type: 'Individual',
      description: 'Full-stack e-commerce platform for online grocery shopping with user authentication, product filtering, and persistent shopping cart system.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
      liveDemo: 'https://www.linkedin.com/posts/nawra-sama-b964142bb_webdevelopment-fullstack-javascript-activity-7385337927826067456-YE4M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzFEqIBeDFY2sU9WjHz_JVLDX1QjlaVGXw',
      github: 'https://github.com/nawrasama/freshmart-ecommerce'
    },
    {
      title: 'TourGuide Sri Lanka',
      category: 'Full Stack',
      type: 'Group',
      description: 'Responsive travel website with destination guides, integrated hotel booking, and end-to-end itinerary planning tools for Sri Lanka tourism.',
      tags: ['PHP', 'JavaScript', 'CSS', 'MySQL'],
      liveDemo: 'https://www.linkedin.com/posts/nawra-sama-b964142bb_projectcompletion-teamwork-wadproject-activity-7391776844141797376-1n5x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzFEqIBeDFY2sU9WjHz_JVLDX1QjlaVGXw',
      github: 'https://github.com/nawrasama/TourGuideSriLanka'
    },
    {
      title: 'BMICal -  Android Application',
      category: 'Mobile',
      type: 'Individual',
      description: 'Native Android app for calculating and classifying Body Mass Index (BMI) with an optimized UI using Kotlin and ViewBinding.',
      tags: ['Kotlin', 'Android', 'ViewBinding', 'XML'],
      liveDemo: '#',
      github: 'https://github.com/nawrasama/BMIcal'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section 
      id="projects" 
      style={{
        backgroundImage: "url('./images/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '80px 0',
        minHeight: '100vh'
      }}
    >
      {/* Dark overlay for better readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '50px',
          color: 'white',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          PROJECTS
        </h2>
        
        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '40px'
        }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '12px 28px',
                border: `2px solid ${activeFilter === filter ? '#007bff' : 'white'}`,
                background: activeFilter === filter ? '#007bff' : 'transparent',
                color: activeFilter === filter ? 'white' : 'white',
                borderRadius: '30px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1rem',
                backdropFilter: 'blur(10px)',
                boxShadow: activeFilter === filter ? '0 4px 15px rgba(0, 123, 255, 0.4)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? 
            '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {filteredProjects.map((project, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }}>
              
              {/* Project Header */}
              <div style={{
                marginBottom: '15px',
                borderBottom: '2px solid #f0f0f0',
                paddingBottom: '15px'
              }}>
                <h3 style={{
                  margin: '0 0 10px 0',
                  fontSize: '1.4rem',
                  color: '#2c3e50',
                  lineHeight: '1.4'
                }}>
                  {project.title}
                </h3>
                
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                    color: 'white'
                  }}>
                    {project.type}
                  </span>
                  
                  {project.status && (
                    <span style={{
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      color: 'white'
                    }}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flex: 1,
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>
                
                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px'
                }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      background: '#e8f4ff',
                      color: '#007bff',
                      padding: '6px 14px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: 'auto'
                }}>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #007bff, #0056b3)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      flex: 1,
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #0056b3, #004085)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #333, #111)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      flex: 1,
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #111, #000)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #333, #111)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;