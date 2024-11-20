import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

function Dashboard() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-600 mb-4 block">Features</span>
          <h2 className="text-4xl font-bold mb-4">SanPay DASHBOARD</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          SanPay payment links are dynamic, highly adaptable, and dependable, designed to seamlessly meet your requirements—whether for single transactions or recurring subscriptions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DashboardFeature
              title="Payment links"
              description="Receive payments directly via email, SMS, social media, website, or app. Unlock the full potential of SanPay without needing to write a single line of code."
              isOpen={true}
            />
            <DashboardFeature
              title="Subscriptions"
              description="Manage recurring payments and subscriptions with ease."
            />
            <DashboardFeature
              title="Developer toolkit"
              description="Access our comprehensive API documentation and SDKs."
            />
            <DashboardFeature
              title="Customer Insights and Analytics"
              description="Track and analyze payment patterns and customer behavior."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800"
              alt="SanPay Dashboard"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardFeature({ title, description, isOpen = false }: { title: string; description: string; isOpen?: boolean }) {
  return (
    <div className="mb-6">
      <button className="flex items-center w-full text-left">
        <Plus className={`h-5 w-5 mr-4 transform transition-transform ${isOpen ? 'rotate-45' : ''}`} />
        <span className="font-semibold">{title}</span>
      </button>
      {isOpen && (
        <p className="text-gray-600 mt-2 ml-9">
          {description}
        </p>
      )}
    </div>
  );
}

export default Dashboard;