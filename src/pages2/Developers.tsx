import React from 'react';
import { motion } from 'framer-motion';
import { Code, Book, Terminal, GitBranch, Copy } from 'lucide-react';
import Navbar from '../components2/Navbar';
import Footer from '../components2/Footer';

function Developers() {
  const codeExample = `// Initialize SanPay client
const SanPay = new SanPay({
  apiKey: process.env.SanPay_API_KEY
});

// Create a payment
const payment = await SanPay.payments.create({
  amount: 1000,
  currency: 'USD',
  description: 'Test payment',
  customer: {
    email: 'customer@example.com'
  }
});`;

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
              <h1 className="text-5xl font-bold mb-6">Developer Hub</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to integrate SanPay's payment solutions into your applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#0A0A0A] rounded-2xl p-8 text-white"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
                <pre className="font-mono text-sm">
                  <code className="text-green-400">{codeExample}</code>
                </pre>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
                <div className="space-y-4">
                  <Step
                    number="01"
                    title="Sign up for an account"
                    description="Create your SanPay account to get your API keys"
                  />
                  <Step
                    number="02"
                    title="Install the SDK"
                    description="npm install @SanPay/sdk"
                  />
                  <Step
                    number="03"
                    title="Make your first API call"
                    description="Follow our quick start guide to process your first payment"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ResourceCard
                icon={Book}
                title="Documentation"
                description="Comprehensive guides and API reference"
              />
              <ResourceCard
                icon={Code}
                title="SDKs & Libraries"
                description="Official SDKs for popular languages"
              />
              <ResourceCard
                icon={Terminal}
                title="API Reference"
                description="Detailed API documentation"
              />
              <ResourceCard
                icon={GitBranch}
                title="Sample Projects"
                description="Example implementations and demos"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Need help with integration?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our developer support team is here to help you with any technical questions.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Contact Developer Support
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-blue-600 font-mono font-bold">{number}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <Icon className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}

export default Developers;