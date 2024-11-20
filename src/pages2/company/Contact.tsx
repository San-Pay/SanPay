import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components2/Navbar';
import Footer from '../../components2/Footer';

function Contact() {
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
              <h1 className="text-5xl font-bold mb-6">Contact</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get in touch with our team for any inquiries.
                <br></br>Twitter: @San__Fi
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;