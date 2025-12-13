import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      style={{
        backgroundImage: `url('./images/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '100px 0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 1
      }}></div>
      
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '50px',
          color: '#1a1a2e',
          fontWeight: '700',
          position: 'relative'
        }}>
          About Me
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #00b4d8, #0984e3)',
            borderRadius: '2px'
          }}></span>
        </h2>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          padding: '50px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 180, 216, 0.1)'
        }}>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            marginBottom: '25px',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            Hi, I'm <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>Nawra Sama</span>, a passionate <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>MERN Stack Developer</span> and Computer Science undergraduate at Uva Wellassa University of Sri Lanka. 
            I have hands-on experience building full-stack web applications, from real-time video conferencing platforms 
            to e-commerce systems, leveraging technologies like <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>React.js, Node.js, MongoDB, Express.js, and TypeScript</span>. 
            I am particularly interested in creating scalable, performant, and user-friendly applications that solve real-world problems.
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            marginBottom: '25px',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            My journey in software development began with <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>HTML, CSS, and JavaScript</span>, and evolved as I explored frameworks like 
            <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}> React and Angular</span>. I have also developed mobile applications using 
            <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}> Kotlin</span> and experimented with 
            <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}> Flutter</span>, broadening my skills across different platforms.
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            Currently, I am working on my <span style={{
              color: '#0984e3',
              fontWeight: '600',
              background: 'linear-gradient(120deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.1) 100%)',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>Final Year Research Project</span>, focusing on a real-time malicious URL detection browser extension, 
            while also contributing to web and mobile projects that enhance user experience and security. 
            I enjoy tackling complex problems, optimizing code, and continuously learning emerging technologies.
          </p>
        </div>

        {/* Skills Summary (Optional Addition) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '40px'
        }}>
          <div style={{
            background: 'rgba(0, 180, 216, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '1px solid rgba(0, 180, 216, 0.2)'
          }}>
            <h4 style={{
              color: '#1a1a2e',
              marginBottom: '10px',
              fontSize: '1.2rem'
            }}>Frontend</h4>
            <p style={{
              color: '#555',
              fontSize: '0.95rem'
            }}>React, HTML5, CSS3, JavaScript, TypeScript</p>
          </div>
          
          <div style={{
            background: 'rgba(0, 180, 216, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '1px solid rgba(0, 180, 216, 0.2)'
          }}>
            <h4 style={{
              color: '#1a1a2e',
              marginBottom: '10px',
              fontSize: '1.2rem'
            }}>Backend</h4>
            <p style={{
              color: '#555',
              fontSize: '0.95rem'
            }}>Node.js, Express.js, MongoDB, REST APIs</p>
          </div>
          
          <div style={{
            background: 'rgba(0, 180, 216, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '1px solid rgba(0, 180, 216, 0.2)'
          }}>
            <h4 style={{
              color: '#1a1a2e',
              marginBottom: '10px',
              fontSize: '1.2rem'
            }}>Mobile & Others</h4>
            <p style={{
              color: '#555',
              fontSize: '0.95rem'
            }}>Kotlin, Flutter, Firebase, Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;