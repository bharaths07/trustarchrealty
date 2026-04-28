import { MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import './Properties.css';

const Properties = () => {
  return (
    <div className="properties-page">
      <section className="properties-header section-padding animate-up">
        <div className="container text-center">
          <h1 className="section-title">Exclusive Property Portfolio</h1>
          <p className="section-subtitle">A curated collection of verified, off-market, and premium listings tailored to your requirements.</p>
        </div>
      </section>

      <section className="inventory-cta section-padding bg-light animate-up">
        <div className="container">
          <div className="cta-rich-box card">
            <div className="cta-content">
              <h2>Verified & Private Inventory</h2>
              <p>
                To maintain the exclusivity and privacy of our high-value listings, we provide our updated inventory directly to verified clients. 
                Whether you are looking for a luxury villa in Indiranagar or a prime commercial space in Koramangala, our team ensures every listing is 100% legally verified.
              </p>
              <div className="cta-features">
                <div className="feature">
                  <ShieldCheck size={20} className="text-accent" />
                  <span>100% Legal Verification</span>
                </div>
                <div className="feature">
                  <ShieldCheck size={20} className="text-accent" />
                  <span>Off-Market Exclusives</span>
                </div>
                <div className="feature">
                  <ShieldCheck size={20} className="text-accent" />
                  <span>NRI Specialized Inventory</span>
                </div>
              </div>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-accent">
                  <MessageSquare size={18} />
                  Request Current Inventory
                </Link>
                <a href="tel:+919844177169" className="btn btn-outline">
                  <PhoneCall size={18} />
                  Speak to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Looking for something specific?" btnText="Share Your Requirements" />
    </div>
  );
};

export default Properties;
