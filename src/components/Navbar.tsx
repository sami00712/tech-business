import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Tech Business</h1>
      <div>
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/service" className="nav-item">Services</Link>
        <Link href="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
