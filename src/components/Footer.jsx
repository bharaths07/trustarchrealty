import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container footer-grid">
        <div className="footer-brand animate-up">
          <img src={logo} alt="TrustArch Realty" className="footer-logo" />
          <p className="footer-desc">
            Premium real estate services focused on trust, transparency, and seamless property transactions for everyone.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/TrustarchrealtyOfficial-T/pfbid02ABq3ryNwsdT9hrfu2hPJzUktWPE6k7Bmhf9JmLH9yaNJpgFJYoKXWQaWsQCJfuvil/?rdid=Inm4Lb2NxWRA2GOi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BxpxG54Bc%2F" target="_blank" rel="noopener noreferrer" title="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/trustarchrealty.official?igsh=MTh0NTFucXN5MzAzMw%3D%3D" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/trust-arch-b30539406/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/919844177169" target="_blank" rel="noopener noreferrer" title="WhatsApp"><MessageCircle size={24} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Property Buy/Sell</Link></li>
            <li><Link to="/services">NRI Management</Link></li>
            <li><Link to="/services">Legal Verification</Link></li>
            <li><Link to="/services">Home Loans</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><Phone size={18} /> <a href="tel:+919844177169">+91 98441 77169</a></li>
            <li><Mail size={18} /> <a href="mailto:trustarchrealty@gmail.com">trustarchrealty@gmail.com</a></li>
            <li><MapPin size={18} /> Nagasandra, near 8th mile, Bengaluru</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} TrustArch Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
