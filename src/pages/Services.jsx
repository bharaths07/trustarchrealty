import { Building2, Globe2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import './Services.css';

const Services = () => {
  const transactionFeatures = [
    "Buy & Sell Support",
    "Rental Management",
    "100% Verified Listings",
    "Negotiation Expertise",
    "Legal Documentation Assistance"
  ];

  const nriFeatures = [
    "Remote Property Buying/Selling",
    "Comprehensive Legal & Tax Support",
    "Virtual Tours & Site Visit Representation",
    "End-to-End Property Management",
    "Direct Communication & Transparent Updates"
  ];

  return (
    <div className="services-page">
      <section className="services-hero section-padding">
        <div className="container text-center">
          <h1>Premium Real Estate Solutions</h1>
          <p className="subtitle">Specialized boutique services tailored to your property requirements.</p>
        </div>
      </section>

      <section className="services-grid-section section-padding bg-white">
        <div className="container">
          <div className="grid-2">
            <ServiceCard 
              icon={Building2}
              title="Property Transactions"
              description="A seamless approach to buying, selling, and renting properties with absolute peace of mind."
              features={transactionFeatures}
              accent={true}
            />
            <ServiceCard 
              icon={Globe2}
              title="NRI Property Handling"
              description="Expert remote handling of properties for those living abroad, ensuring your assets are managed with trust."
              features={nriFeatures}
              accent={true}
            />
          </div>
        </div>
      </section>

      <section className="services-details section-padding bg-light animate-up">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Our NRI Services Stand Out</h2>
            <p className="section-subtitle">Tailored solutions for your property journey.</p>
          </div>
          <div className="grid-2">
            <div className="detail-item">
              <h4>Transparency</h4>
              <p>Real-time updates and complete video documentation for every site visit or proceeding.</p>
            </div>
            <div className="detail-item">
              <h4>Legal Assurance</h4>
              <p>We handle all local regulations, paperwork, and power of attorney coordination.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to discuss your property needs?" />
    </div>
  );
};

export default Services;
