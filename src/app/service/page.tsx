import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

const Services: React.FC = () => {
  return (
    <>
      <Navbar />
      <section style={{ padding: '2rem', textAlign: 'center' }} className='ct'>
        <h2>Our Services</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr', padding: '1rem' }}>
          <ServiceCard title="<Frontened/>" description="Contact Us for this Service" />
          <ServiceCard title="<Backend/>" description="Contact Us for this Service" />
          <ServiceCard title="<Full Stack/>" description="Contact Us for this Service" />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Services;
