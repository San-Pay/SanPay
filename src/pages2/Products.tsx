import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Globe, ShieldCheck, Wallet, Building } from 'lucide-react';
import Navbar from '../components2/Navbar';
import Footer from '../components2/Footer';

function Products() {
  const products = [
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Accept payments globally with our secure payment processing solution.',
      features: ['Multi-currency support', 'Fraud protection', 'Real-time reporting']
    },
    {
      icon: Smartphone,
      title: 'Mobile Payments',
      description: 'Enable seamless mobile payments for your customers worldwide.',
      features: ['Digital wallets', 'QR code payments', 'In-app purchases']
    },
    {
      icon: Globe,
      title: 'Global Transfers',
      description: 'Send and receive money internationally with competitive rates.',
      features: ['Real-time transfers', 'Multi-currency accounts', 'Local payment methods']
    },
    {
      icon: ShieldCheck,
      title: 'Security Solutions',
      description: 'Protect your business with our advanced security features.',
      features: ['Fraud detection', 'Encryption', 'Compliance tools']
    },
    {
      icon: Wallet,
      title: 'Digital Banking',
      description: 'Modern banking solutions for businesses of all sizes.',
      features: ['Virtual accounts', 'Corporate cards', 'Expense management']
    },
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Customized solutions for large-scale operations.',
      features: ['Custom integration', 'Dedicated support', 'Advanced analytics']
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
              <h1 className="text-5xl font-bold mb-6">Products</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive suite of payment solutions designed to help your business grow globally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <product.icon className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Join thousands of businesses that trust SanPay for their payment needs.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Products;