import React from 'react';

const Hero = () => {
  const handleDownloadResume = (e) => {
    e.preventDefault(); // Prevent default link behavior
    
    // Path to your resume file - CORRECTED for GitHub Pages
    const resumePath = '/Portfolio/resume.pdf';
    
    console.log('Downloading resume from:', resumePath);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePath;
    
    // This sets the download filename for the user
    link.download = 'Nawrasama resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      style={{
        backgroundImage: `url('/Portfolio/images/bg3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '100px 0',
        color: 'white'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        width: '100%'
      }}>
        {/* Profile Photo */}
        <div style={{
          margin: '0 auto 30px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: '4px solid white',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          <img 
            src="/Portfolio/images/profile.jpg" 
            alt="Nawrasama" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80";
            }}
          />
        </div>
        
        {/* Main Heading */}
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '15px',
          fontWeight: '700',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          background: 'linear-gradient(to right, #00b4d8, #ffffff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Nawrasama
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: '1.8rem',
          marginBottom: '30px',
          color: '#f0f0f0',
          fontWeight: '300',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
        }}>
          Computer Science Undergraduate
        </p>
        
        {/* Description with better paragraph arrangement */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 40px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '20px',
            color: '#f0f0f0',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            Computer Science undergraduate with a strong foundation in software development and a passion for
            building efficient, user-focused applications.
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#f0f0f0',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            Skilled in contributing across the full development lifecycle and eager to apply strong problem-solving 
            abilities within a collaborative software engineering environment.
          </p>
        </div>
        
        {/* Call to Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={handleDownloadResume} 
            style={{
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #00b4d8, #0984e3)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 5px 20px rgba(0, 180, 216, 0.4)',
              minWidth: '220px',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #0984e3, #00b4d8)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 180, 216, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #00b4d8, #0984e3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 180, 216, 0.4)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download Resume
          </button>
          
          <a 
            href="#contact" 
            style={{
              padding: '16px 40px',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              minWidth: '220px',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#1a1a2e';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator (optional) */}
        <div style={{
          marginTop: '60px',
          animation: 'bounce 2s infinite'
        }}>
          <a 
            href="#about" 
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.9rem',
              opacity: '0.8'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
          >
            <span>Explore More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;