import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '../components2/Navbar';
import Footer from '../components2/Footer';

function Company() {
  const stats = [
    { number: '10M+', label: 'Transactions Daily' },
    { number: '150+', label: 'Countries Served' },
    { number: '99.99%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in financial technology.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making financial services accessible worldwide.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400'
    },
    {
      name: 'Emily Rodriguez',
      role: 'COO',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400'
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '100 Market Street, Suite 300',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800'
    },
    {
      city: 'London',
      address: '25 Old Broad Street',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800'
    },
    {
      city: 'Singapore',
      address: '1 Raffles Place',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-blue">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Building the Future of Finance</h1>
              <p className="text-gray-400 text-lg mb-12">
                We're on a mission to make global payments simple, secure, and accessible to businesses of all sizes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at SanPay.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center"
                >
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the team building the future of global payments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With offices around the world, we're here to serve you wherever you are.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={office.image}
                      alt={office.city}
                      className="rounded-2xl object-cover w-full h-64"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {office.address}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-12">
                Have questions? Our team is here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <span>contact@SanPay.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Company;