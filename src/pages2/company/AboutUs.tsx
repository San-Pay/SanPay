import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components2/Navbar';
import Footer from '../../components2/Footer';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold mb-6">About Us</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Sandeep Kumar Mahto, Alok Kumar Maurya, Shashank Yadav, and
              Kuldeep Kumar Mahto are final-year computer science students from
              Bengaluru, India. Passionate about technology and innovation, they are
              focused on building solutions that bridge the gap between
              cryptocurrency and traditional finance. With expertise in blockchain
              development, decentralized finance, and full-stack development, they
              aim to revolutionize digital payments with seamless, real-time crypto to-fiat conversion systems
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;