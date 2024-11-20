import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from './AuthModal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSignIn = () => {
    setAuthType('signin');
    setShowAuthModal(true);
  };

  const handleGetStarted = () => {
    setAuthType('signup');
    setShowAuthModal(true);
  };

  const navItems = {
    products: [
      { name: 'Payment Processing', path: '/products/payment-processing' },
      { name: 'Online Payments', path: '/products/online-payments' },
      { name: 'Point of Sale', path: '/products/point-of-sale' },
      { name: 'Invoicing', path: '/products/invoicing' }
    ],
    company: [
      { name: 'About Us', path: '/company/about' },
      { name: 'Careers', path: '/company/careers' },
      { name: 'Press', path: '/company/press' },
      { name: 'Contact', path: '/company/contact' }
    ],
    resources: [
      { name: 'Documentation', path: '/resources/documentation' },
      { name: 'Support Center', path: '/resources/support' },
      { name: 'Partners', path: '/resources/partners' },
      { name: 'Blog', path: '/resources/blog' }
    ]
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="text-2xl font-bold text-blue-600 no-underline">SanPay</Link>
              </motion.div>

              <div className="hidden md:flex space-x-8">
                <NavDropdown
                  title="Products"
                  items={navItems.products}
                  isActive={activeDropdown === 'products'}
                  onMouseEnter={() => setActiveDropdown('products')}
                  onMouseLeave={() => setActiveDropdown(null)}
                />

                <NavDropdown
                  title="Company"
                  items={navItems.company}
                  isActive={activeDropdown === 'company'}
                  onMouseEnter={() => setActiveDropdown('company')}
                  onMouseLeave={() => setActiveDropdown(null)}
                />

                <NavDropdown
                  title="Resources"
                  items={navItems.resources}
                  isActive={activeDropdown === 'resources'}
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                />

                <Link to="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-medium no-underline">
                  Solutions
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignIn}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4 h-screen">
                <div className="flex flex-col space-y-4">
                  <MobileNavSection title="Products" items={navItems.products} />
                  <Link to="/solutions" className="block py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium no-underline">
                    Solutions
                  </Link>
                  <MobileNavSection title="Company" items={navItems.company} />
                  <MobileNavSection title="Resources" items={navItems.resources} />
                  <div className="pt-4 border-t space-y-4">
                    <button
                      onClick={handleSignIn}
                      className="w-full py-2 text-center text-gray-600 hover:text-gray-900 font-medium"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={handleGetStarted}
                      className="w-full py-3 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type={authType}
      />
    </>
  );
}

interface NavItem {
  name: string;
  path: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NavDropdown({ title, items, isActive, onMouseEnter, onMouseLeave }: NavDropdownProps) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2"
          >
          
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 no-underline"
              >
                {item.name}
              </Link>    
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavSection({ title, items }: { title: string; items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 space-y-2"
          >
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors no-underline"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
