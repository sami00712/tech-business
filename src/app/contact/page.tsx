import React from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <section style={{ padding: '2rem', textAlign: 'center' }} className='ct'>
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
