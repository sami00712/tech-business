import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div>
      <section className="hero-section">
        <h2 className="hero-title">Welcome to Our Business</h2>
        <p className="hero-text">Providing Quality Services for Your Needs</p>
    
      <Image src={'/atm.jpeg'} alt='pic' width={400} height={100} className='pic'/>
      <button className="hero-button">Get Started</button>
      </section>  
    </div>
  );
};

export default HeroSection;
