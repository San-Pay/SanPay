import React from 'react';
import { motion } from 'framer-motion';
import { Store, Briefcase, Building2, Rocket, ArrowRight } from 'lucide-react';
import Navbar from '../components2/Navbar';
import Footer from '../components2/Footer';

function Solutions() {
  const solutions = [
    {
      icon: Store,
      title: 'For E-commerce',
      description: 'Accept payments globally and provide a seamless checkout experience.',
      features: [
        'Shopping cart integration',
        'Subscription billing',
        'Marketplace solutions',
        'Fraud prevention'
      ]
    },
    {
      icon: Briefcase,
      title: 'For SaaS',
      description: 'Manage recurring payments and global subscriptions effortlessly.',
      features: [
        'Subscription management',
        'Usage-based billing',
        'Customer portal',
        'Revenue recovery'
      ]
    },
    {
      icon: Building2,
      title: 'For Enterprise',
      description: 'Custom solutions for large-scale operations and complex needs.',
      features: [
        'Custom integration',
        'Advanced reporting',
        'Dedicated support',
        'SLA guarantees'
      ]
    },
    {
      icon: Rocket,
      title: 'For Startups',
      description: 'Scale your business with flexible payment solutions.',
      features: [
        'Quick setup',
        'Competitive rates',
        'Growth tools',
        'Developer-friendly'
      ]
    }
  ];

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
              <h1 className="text-5xl font-bold mb-6">Solutions</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tailored payment solutions for every industry and business size.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <solution.icon className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200"
                alt="Payment Solutions"
                className="rounded-2xl shadow-xl mb-8"
              />
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Not sure which solution is right for you?</h2>
                <p className="text-gray-600 mb-8">
                  Our payment experts are here to help you find the perfect solution for your business.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Talk to an Expert
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Solutions;