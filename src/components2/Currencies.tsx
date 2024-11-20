import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function Currencies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-8">
              CONNECTING THE<br />
              WORLD'S CURRENCIES
            </h2>
            
            <div className="space-y-6">
              <Feature
                title="White-labeled solutions for better money movement"
                description="Simple bundles for your specific operational and regulated needs. We build the solutions that work best for you – orchestrating so you don't have to."
              />
              <Feature
                title="Available by API, no-code, and embeddable widget"
                description="Save hundreds of hours on development time"
              />
              <Feature
                title="Unlimited pricing"
                description="Transparent and competitive rates"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=800"
              alt="Currency Exchange Interface"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="flex items-start gap-3 mb-2">
        <Check className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 ml-8">{description}</p>
    </div>
  );
}

export default Currencies;