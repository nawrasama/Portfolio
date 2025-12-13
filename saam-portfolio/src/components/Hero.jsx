import React from 'react';

const Hero = () => {
  const handleDownloadResume = (e) => {
    e.preventDefault(); // Prevent default link behavior
    
    // ✅ CORRECT PATH for Vercel
    const resumePath = '/resume.pdf';
    
    console.log('Downloading resume from:', resumePath);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePath;
    
    // ✅ Fixed filename (no spaces)
    link.download = 'Nawrasama_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      style={{
        // ✅ FIXED background image path
        backgroundImage: `url('/images/bg3.jpg')`,
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
      {/* ... rest of your code stays the same ... */}
      
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
        {/* ✅ FIXED profile image path */}
        <img 
          src="/images/profile.jpg" 
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
      
      {/* ... rest of your code ... */}
    </section>
  );
};

export default Hero;