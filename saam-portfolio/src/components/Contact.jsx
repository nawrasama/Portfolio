import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
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
      {/* Dark overlay for better readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: 'white',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Contact Me
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          color: '#e0e0e0',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Feel free to reach out for any inquiries or collaboration opportunities!
        </p>
        
        {/* Contact Form */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '15px',
          padding: '40px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{
              marginBottom: '25px'
            }}>
              <label htmlFor="name" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#333',
                fontSize: '1rem'
              }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0984e3';
                  e.target.style.boxShadow = '0 0 0 3px rgba(9, 132, 227, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            <div style={{
              marginBottom: '25px'
            }}>
              <label htmlFor="email" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#333',
                fontSize: '1rem'
              }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email address"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0984e3';
                  e.target.style.boxShadow = '0 0 0 3px rgba(9, 132, 227, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            <div style={{
              marginBottom: '30px'
            }}>
              <label htmlFor="message" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#333',
                fontSize: '1rem'
              }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="6"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '120px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0984e3';
                  e.target.style.boxShadow = '0 0 0 3px rgba(9, 132, 227, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            <button 
              type="submit" 
              style={{ 
                width: '100%',
                padding: '16px 32px',
                backgroundColor: '#0984e3',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0770c4';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 20px rgba(9, 132, 227, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#0984e3';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section (Optional) */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#e0e0e0',
            fontSize: '1rem',
            marginBottom: '15px'
          }}>
            Or connect with me on:
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <a 
              href="https://www.linkedin.com/in/nawra-sama-b964142bb/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/nawrasama" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;