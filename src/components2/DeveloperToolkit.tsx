import React from 'react';
import { motion } from 'framer-motion';

function DeveloperToolkit() {
  return (
    <section className="py-20 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-8">DEVELOPER TOOLKIT</h2>
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
              <pre className="text-green-400">
                {`// Initialize SanPay client
const SanPay = new SanPay({
  apiKey: process.env.SANPAY_API_KEY
});

// Create payment
const payment = await SanPay.payments.create({
  amount: 1000,
  currency: 'USD',
  description: 'Test payment'
});`}
              </pre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800"
              alt="Developer Code"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperToolkit;