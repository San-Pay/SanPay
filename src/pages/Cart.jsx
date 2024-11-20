// src/pages/Cart.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, deleteProduct } from "../app/features/cart/cartSlice";
// Import specific icons from react-icons
import { FaTimes } from "react-icons/fa";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css";

import UpiLogo from "../Images/logos/upi-logo.png"; // Import logos
import PayPalLogo from "../Images/logos/paypal-logo.png";
import CreditCardLogo from "../Images/logos/credit-card-logo.png";
import ApplePayLogo from "../Images/logos/apple-pay-logo.png";
import AmazonPayLogo from "../Images/logos/amazon-pay-logo.png";
import NetBankingLogo from "../Images/logos/net-banking-logo.png";

// Import the PaymentModal component
import PaymentWalletSelectionModal from "../components/Payment/PaymentWalletSelectionModal";
import "../css/Cart_payment_component.css";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // State for handling the modal visibility
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  // Calculate total price
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // Function to open modal
  const handleOpenModal = (method) => {
    setPaymentMethod(method);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <NavBar />
      {/* Conditionally apply blur to the background when modal is open */}
      <section
        className={`cart-items ${showModal ? "blur-background" : ""} py-8`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-2/3">
              {cartList.length === 0 && (
                <h1 className="text-center text-lg font-bold text-gray-700">
                  No Items are added in Cart
                </h1>
              )}
              {cartList.map((item) => {
  const productQty = item.price * item.qty;
  return (
    <div
      className="cart-list mb-4 bg-white p-4 rounded-lg shadow-md relative w-full sm:w-72 md:w-80 lg:w-5/6 h-auto"
      key={item.id}
    >
      <div className="flex items-start">
        <div className="image-holder w-1/4">
          <img src={item.imgUrl} alt="" className="rounded-md w-full" />
        </div>
        <div className="flex-1 px-4">
          <h3 className="text-lg font-bold">{item.productName}</h3>
          <h4 className="text-gray-600 text-base">
            ${item.price}.00 * {item.qty}
            <span className="block text-black ">
              ${productQty}.00
            </span>
          </h4>
        </div>
        <button
          className="delete ml-4 text-white-600 hover:text-gray-800 absolute top-2 right-2"
          onClick={() => dispatch(deleteProduct(item))}
        >
          <FaTimes />
        </button>
      </div>

      {/* Add and Minus Buttons */}
      <div className="absolute bottom-2 right-2 flex space-x-2">
        <button
          className="incCart p-2 bg-white hover:bg-gray-300 text-black rounded-full shadow-md"
          onClick={() => dispatch(addToCart({ product: item, num: 1 }))}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="desCart p-2 bg-white hover:bg-gray-300 text-black rounded-full shadow-md"
          onClick={() => dispatch(decreaseQty(item))}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
})}

            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="cart-total mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                <div className="flex justify-between">
                  <h4 className="text-gray-700">Total Price :</h4>
                  <h3 className="text-lg font-bold">${totalPrice}.00</h3>
                </div>
              </div>

              {/* Payment Options */}
              <div className="payment-options bg-white p-4 rounded-lg shadow-md h-auto">
                <h3 className="text-lg font-bold mb-4">Payment Options</h3>
                <div className="grid grid-cols-3 pm-1 gap-2">
                    <button className="payment-box p-1 border rounded-md w-auto hover:shadow "
                      onClick={() => handleOpenModal("SanPay")}
                    >
                      <img
                        src={PayPalLogo}
                        alt="SanPay"
                        className="w-* mx-auto rounded-sm"
                      />
                    </button>
                  <button className="payment-box p-2 border rounded-lg w-auto hover:shadow-lg transition">
                    <img
                      src={UpiLogo}
                      alt="UPI"
                      className="w-full rounded-md"
                    />
                  </button>
                  <button className="payment-box p-2 border rounded-lg w-auto hover:shadow-lg transition">
                    <img
                      src={CreditCardLogo}
                      alt="Credit/Debit Card"
                      className="w-full rounded-md"
                    />
                  </button>
                  <button className="payment-box p-2 border rounded-lg w-auto hover:shadow-lg transition">
                    <img
                      src={ApplePayLogo}
                      alt="Apple Pay"
                      className="w-full rounded-md"
                    />
                  </button>
                  <button className="payment-box p-2 border rounded-lg w-auto hover:shadow-lg transition">
                    <img
                      src={AmazonPayLogo}
                      alt="Amazon Pay"
                      className="w-full rounded-md"
                    />
                  </button>
                  <button className="payment-box p-2 border rounded-lg w-auto hover:shadow-lg transition">
                    <img
                      src={NetBankingLogo}
                      alt="Net Banking"
                      className="w-full rounded-md"
                    />
                  </button>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* Use the PaymentModal component here */}
      <PaymentWalletSelectionModal
        show={showModal}
        handleClose={handleCloseModal}
        paymentMethod={paymentMethod}
        totalPrice={totalPrice}
        cartList={cartList} // Pass cartList to PaymentModal
      />
      <Footer />
    </>
  );
};

export default Cart;
