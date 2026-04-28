import { ShieldCheck, CheckCircle, ArrowRight, Smartphone, Building2, MapPin, Users, Target, Globe, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import heroBg from '../assets/hero-bg.png';
import expertiseImg from '../assets/expertise.png';
import transThumb from '../assets/transaction.png';
import nriThumb from '../assets/nri-thumb.png';
import patternBg from '../assets/pattern-bg.png';
import testimonialsBg from '../assets/testimonials-bg.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(11, 31, 58, 0.75), rgba(11, 31, 58, 0.75)), url(${heroBg})` }}>
        <div className="container hero-content animate-up">
          <h1 className="hero-title white">Where Trust Meets <span className="text-accent underline">Property</span></h1>
          <p className="hero-subtitle white-fade delay-1">
            Premium real estate solutions for home buying, selling, and specialized NRI property handling. Your vision, our commitment.
          </p>
          <div className="hero-btns delay-2">
            <Link to="/services" className="btn btn-accent pulse">Explore Services</Link>
            <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
          <div className="hero-badge animate-scale delay-3">
             <ShieldCheck size={20} />
             <span>100% Verified Listings</span>
          </div>
        </div>
      </section>

      {/* Our Core Expertise - Side by Side */}
      <section className="about-preview section-padding">
        <div className="container">
          <div className="side-by-side-grid">
            <div className="content-side animate-up">
              <h2 className="section-title">Our Core Expertise</h2>
              <p className="section-subtitle">Why we are the preferred choice for discerning clients.</p>
              <div className="expertise-list">
                <div className="expertise-item">
                  <div className="item-icon"><ShieldCheck size={24} /></div>
                  <div className="item-text">
                    <h4>Unwavering Trust</h4>
                    <p>We prioritize transparency in every contract and deal closure.</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <div className="item-icon"><Target size={24} /></div>
                  <div className="item-text">
                    <h4>Verified Listings</h4>
                    <p>Every property undergoes a rigorous legal and quality check.</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <div className="item-icon"><Users size={24} /></div>
                  <div className="item-text">
                    <h4>Client Focussed</h4>
                    <p>Personalized consultation ensures we find exactly what you seek.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-text">Learn More About Us <ArrowRight size={18} /></Link>
            </div>
            <div className="image-side animate-scale">
              <div className="image-frame">
                <img src={expertiseImg} alt="Architecture Expertise" />
                <div className="image-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Spectrum Solutions - Showcase Cards */}
      <section className="featured-services section-padding bg-dark">
        <div className="container">
          <div className="section-header text-center animate-up">
             <h2 className="section-title text-white">Full-Spectrum Property Solutions</h2>
             <p className="section-subtitle text-gray-fade">Tailored for individuals and NRIs alike.</p>
          </div>
          <div className="services-showcase-grid">
             <Link to="/services" className="service-showcase-card animate-up" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${transThumb})` }}>
                <div className="card-content">
                   <Building2 size={32} className="text-accent" />
                   <h3>Property Transactions</h3>
                   <p>Seamless buying and selling with expert legal support.</p>
                </div>
             </Link>
             <Link to="/services" className="service-showcase-card animate-up delay-1" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${nriThumb})` }}>
                <div className="card-content">
                   <Globe size={32} className="text-accent" />
                   <h3>NRI Property Handling</h3>
                   <p>Trusted remote management and representation for NRI investors.</p>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works section-padding" style={{ backgroundImage: `url(${patternBg})` }}>
        <div className="container">
          <div className="section-header text-center animate-up">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">A seamless journey from selection to possession.</p>
          </div>
          <div className="steps-container">
            {[
              { id: '01', title: 'Consultation', text: 'Tell us your requirements and we will find the perfect match.' },
              { id: '02', title: 'Shortlisting', text: 'Curated list of verified properties for you to explore.' },
              { id: '03', title: 'Closure', text: 'Legal assistance and smooth documentation for a worry-free deal.' }
            ].map((step, idx) => (
              <div key={idx} className={`step-card animate-up delay-${idx+1}`}>
                <div className="step-content">
                  <span className="step-number">{step.id}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <div className="step-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding" style={{ backgroundImage: `linear-gradient(rgba(11, 31, 58, 0.9), rgba(11, 31, 58, 0.8)), url(${testimonialsBg})` }}>
        <div className="container">
          <div className="section-header text-center animate-up">
            <h2 className="section-title text-white">Client Success Stories</h2>
            <p className="section-subtitle text-gray-fade">Trusted by hundreds of families and NRIs.</p>
          </div>
          <div className="testimonial-cards">
            <div className="testimonial-card card glass animate-up">
              <Quote className="quote-icon" size={40} />
              <p>"TrustArch made my property sale in Bangalore so simple. Their transparency is absolutely unmatched. I felt secure at every step of the legal process."</p>
              <div className="client">
                <div className="client-avatar">AR</div>
                <div className="client-info">
                  <strong>Ananya R.</strong>
                  <span>Luxury Homeowner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card card glass animate-up delay-1">
              <Quote className="quote-icon" size={40} />
              <p>"As an NRI, managing my properties was a nightmare. TrustArch handled everything remotely - from verification to tenant placement!"</p>
              <div className="client">
                <div className="client-avatar">RS</div>
                <div className="client-info">
                  <strong>Rahul S.</strong>
                  <span>NRI Client (USA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
