import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Tech Business. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='li'>
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='li'>
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='li'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
