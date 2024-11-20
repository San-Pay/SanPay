import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Wallet } from 'lucide-react';

function Features() {
  const features = [
    {
      title: 'For international remittances',
      description: 'Send and receive payments in any currency, with vendor names (USD, MXN, BRL, EUR) at world-class exchange rates.',
      icon: Globe,
      items: ['Compliant & secure', 'Real-market settlement', 'Global coverage']
    },
    {
      title: 'For high-net-worth individuals',
      description: 'Access our most affordable currency conversions, and comprehensive financial tracking and management solutions.',
      icon: Shield,
      items: ['Dedicated support 24/7', 'Zero fee/Zero commission', 'Privacy and encryption']
    },
    {
      title: 'For Finance & FinTechs',
      description: 'Accept payments any way you want, leverage high-conversion tool suite directly in your bank, and offer conversion services to your customers with white-label.',
      icon: Wallet,
      items: ['Service level agreements', 'Customer guardrails', 'API & No-Code Solutions']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            INTERNATIONAL PAYMENTS FOR ENTERPRISES
          </h2>
          <p className="text-gray-600">
          Crypto-to-fiat one click money transfers made effortless like never before
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0A0A0A] text-white p-8 rounded-3xl"
            >
              <feature.icon className="h-8 w-8 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;