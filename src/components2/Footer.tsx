import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">SanPay</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing digital payments for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>

          <div>
  <h4 className="text-lg font-semibold mb-6">Products</h4>
  <ul className="space-y-4 text-gray-400 no-underline pl-0">
    <li className="pl-0">
      <Link to="/products/payment-processing" className="text-gray-400 no-underline">Payment Processing</Link>
    </li>
    <li className="pl-0">
      <Link to="/products/online-payments" className="text-gray-400 no-underline">Online Payments</Link>
    </li>
    <li className="pl-0">
      <Link to="/products/point-of-sale" className="text-gray-400 no-underline">Point of Sale</Link>
    </li>
    <li className="pl-0">
      <Link to="/products/invoicing" className="text-gray-400 no-underline">Invoicing</Link>
    </li>
  </ul>
</div>

<div>
  <h4 className="text-lg font-semibold mb-6">Company</h4>
  <ul className="space-y-4 text-gray-400 no-underline pl-0">
    <li className="pl-0">
      <Link to="/company/about" className="text-gray-400 no-underline">About Us</Link>
    </li>
    <li className="pl-0">
      <Link to="/company/careers" className="text-gray-400 no-underline">Careers</Link>
    </li>
    <li className="pl-0">
      <Link to="/company/press" className="text-gray-400 no-underline">Press</Link>
    </li>
    <li className="pl-0">
      <Link to="/company/contact" className="text-gray-400 no-underline">Contact</Link>
    </li>
  </ul>
</div>

<div>
  <h4 className="text-lg font-semibold mb-6">Resources</h4>
  <ul className="space-y-4 text-gray-400 no-underline pl-0">
    <li className="pl-0">
      <Link to="/resources/documentation" className="text-gray-400 no-underline">Documentation</Link>
    </li>
    <li className="pl-0">
      <Link to="/resources/support" className="text-gray-400 no-underline">Support Center</Link>
    </li>
    <li className="pl-0">
      <Link to="/resources/partners" className="text-gray-400 no-underline">Partners</Link>
    </li>
    <li className="pl-0">
      <Link to="/resources/blog" className="text-gray-400 no-underline">Blog</Link>
    </li>
  </ul>
</div>


</div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SanPay. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/legal/privacy" className="text-gray-500 hover:text-white transition-colors no-underline">Privacy Policy</Link>
              <Link to="/legal/terms" className="text-gray-500 hover:text-white transition-colors no-underline">Terms of Service</Link>
              <Link to="/legal/cookie" className="text-gray-500 hover:text-white transition-colors no-underline">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={to}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

export default Footer;