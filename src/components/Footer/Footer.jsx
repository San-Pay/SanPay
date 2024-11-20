import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import {FaShoppingBag } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  
                  <h1>SanPay</h1>
              </div>
              <p>Revolutionizing digital payments for businesses worldwide.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Bengaluru, Karnataka, India - 560060 </li>
                <li>Twitter: @San__Fi</li>
    
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
