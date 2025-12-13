import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML', 
      description: 'Building structured web content', 
      icon: './images/html.jpg' 
    },
    { 
      name: 'CSS', 
      description: 'Styling and layout for modern web designs',
      icon: './images/css.jpg' 
    },
    { 
      name: 'JavaScript', 
      description: 'Building interactive and dynamic web applications',
      icon: './images/js.png' 
    },
    { 
      name: 'React', 
      description: 'Building interactive UIs with state management',
      icon: './images/react.png' 
    },
    { 
      name: 'Node.js', 
      description: 'Building scalable server-side applications',
      icon: './images/nodejs.png' 
    },
    { 
      name: 'Express.js', 
      description: 'Lightweight web framework for building robust APIs and applications.',
      icon: './images/expressjs.png' 
    },
    { 
      name: 'MongoDB', 
      description: 'NoSQL database for storing and managing high-volume data efficiently.',
      icon: './images/mongodb.jpg' 
    },
    { 
      name: 'Firebase', 
      description: 'Backend-as-a-Service for fast app development',
      icon: './images/firebase.png' 
    },
  ];

  return (
    <section 
      id="skills" 
      style={{
        backgroundImage: "url('./images/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '80px 0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* White overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
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
          color: '#333',
          position: 'relative'
        }}>
          My Skills
          <span style={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #007bff, #00bfff)',
            borderRadius: '2px'
          }}></span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '30px 25px',
              textAlign: 'center',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #eaeaea',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backdropFilter: 'blur(5px)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #f0f8ff, #e6f7ff)',
                borderRadius: '50%',
                border: '2px solid #e0f0ff'
              }}>
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} logo`}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Failed to load image: ${skill.icon}`);
                  }}
                />
              </div>
              <h3 style={{
                margin: '10px 0',
                fontSize: '1.5rem',
                color: '#2c3e50',
                fontWeight: '600'
              }}>{skill.name}</h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                fontSize: '0.95rem',
                margin: '0'
              }}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;