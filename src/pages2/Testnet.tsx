import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Shield, ArrowRight } from 'lucide-react';
import Navbar from '../components2/Navbar';
import Footer from '../components2/Footer';
import { Link } from 'react-router-dom';
function Testnet() {
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
              <h1 className="text-5xl font-bold mb-6">SanPay Testnet Store</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience our payment gateway in action. Make test purchases with demo products using our sandbox environment.
              </p>
              <br></br><br></br>
              <Link to="/sanpayecomm">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Try TestNet on a E-commerce Platform
              </button>
              </Link>
            
            </motion.div>

          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                icon={ShoppingCart}
                title="Test Transactions"
                description="Process mock purchases with our demo products"
              />
              <Feature
                icon={CreditCard}
                title="Sandbox Environment"
                description="Use test credit cards and payment methods"
              />
              <Feature
                icon={Shield}
                title="Safe Testing"
                description="Experiment without real money or risk"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Feature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
    >
      <Icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

export default Testnet;