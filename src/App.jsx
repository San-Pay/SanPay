import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home2 = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Home = lazy(() => import('./components2/Home'));
const Products = lazy(() => import('./pages2/Products'));
const Solutions = lazy(() => import('./pages2/Solutions'));
const Company = lazy(() => import('./pages2/Company'));
const PaymentProcessing = lazy(() => import('./pages2/products/PaymentProcessing'));
const OnlinePayments = lazy(() => import('./pages2/products/OnlinePayments'));
const PointOfSale = lazy(() => import('./pages2/products/PointOfSale'));
const Invoicing = lazy(() => import('./pages2/products/Invoicing'));
const AboutUs = lazy(() => import('./pages2/company/AboutUs'));
const Careers = lazy(() => import('./pages2/company/Careers'));
const Press = lazy(() => import('./pages2/company/Press'));
const Contact = lazy(() => import('./pages2/company/Contact'));
const Documentation = lazy(() => import('./pages2/resources/Documentation'));
const SupportCenter = lazy(() => import('./pages2/resources/SupportCenter'));
const Partners = lazy(() => import('./pages2/resources/Partners'));
const Blog = lazy(() => import('./pages2/resources/Blog'));
const Privacy = lazy(() => import('./pages2/legal/Privacy'));
const Terms = lazy(() => import('./pages2/legal/Terms'));
const Cookie = lazy(() => import('./pages2/legal/Cookie'));
const TestNet = lazy(() => import('./pages2/Testnet'));


function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        <Routes>
          <Route path="/sanpayecomm" element={<Home2 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/company" element={<Company />} />
        <Route path="/testnet" element={<TestNet/>}/>
        {/* Product Routes */}
        <Route path="/products/payment-processing" element={<PaymentProcessing />} />
        <Route path="/products/online-payments" element={<OnlinePayments />} />
        <Route path="/products/point-of-sale" element={<PointOfSale />} />
        <Route path="/products/invoicing" element={<Invoicing />} />
        
        {/* Company Routes */}
        <Route path="/company/about" element={<AboutUs />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/press" element={<Press />} />
        <Route path="/company/contact" element={<Contact />} />
        
        {/* Resource Routes */}
        <Route path="/resources/documentation" element={<Documentation />} />
        <Route path="/resources/support" element={<SupportCenter />} />
        <Route path="/resources/partners" element={<Partners />} />
        <Route path="/resources/blog" element={<Blog />} />
        
        {/* Legal Routes */}
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/cookie" element={<Cookie />} />
        </Routes>
        
      </Router>
    </Suspense>
  );
}

export default App;
