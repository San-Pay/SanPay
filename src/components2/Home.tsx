import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Currencies from './Currencies';
import Dashboard from './Dashboard';
import DeveloperToolkit from './DeveloperToolkit';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Currencies />
        <Dashboard />
        <DeveloperToolkit />
      </main>
      <Footer />
    </div>
  );
}

export default Home;