import { Target, Eye, Users, ShieldCheck, Award } from 'lucide-react';
import CTASection from '../components/CTASection';
import expertiseImg from '../assets/expertise.png';
import patternBg from '../assets/pattern-bg.png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section-padding animate-up" style={{ backgroundImage: `linear-gradient(rgba(11, 31, 58, 0.8), rgba(11, 31, 58, 0.8)), url(${expertiseImg})` }}>
        <div className="container text-center">
          <h1 className="white">Building Trust in Every Square Foot</h1>
          <p className="white-fade">The story of TrustArch Realty and our commitment to excellence.</p>
        </div>
      </section>

      <section className="about-story section-padding" style={{ backgroundImage: `url(${patternBg})` }}>
        <div className="container story-grid">
          <div className="story-image animate-scale">
            <div className="image-frame">
              <img src={expertiseImg} alt="Our Expertise" />
              <div className="image-accent"></div>
            </div>
          </div>
          <div className="story-content animate-up">
            <div className="legible-card">
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">TrustArch Realty was founded with a single mission: to bring absolute transparency to the real estate market. We noticed the gap in the industry where trust was often a secondary concern. We decided to change that.</p>
              <p className="story-text">Starting as a small boutique consultancy, we have grown into a premium real estate partner, specializing in high-value transactions and NRI property management. Our name, TrustArch, represents the arch of reliability we build over every client's investment.</p>
            </div>
            
            <div className="mission-vision grid-2">
              <div className="mv-item card">
                <div className="mv-icon"><Target size={32} /></div>
                <h4>Our Mission</h4>
                <p>To provide seamless, legally-secure property solutions while prioritizing client trust above all.</p>
              </div>
              <div className="mv-item card">
                <div className="mv-icon"><Eye size={32} /></div>
                <h4>Our Vision</h4>
                <p>To be the most trusted real estate brand for both local buyers and the global Indian diaspora.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section-padding bg-light">
        <div className="container text-center">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card card animate-up">
              <div className="value-icon"><ShieldCheck size={40} /></div>
              <h4>Client First</h4>
              <p>Your goals are our priority. We listen, adapt, and deliver personalized solutions.</p>
            </div>
            <div className="value-card card animate-up delay-1">
              <div className="value-icon"><Award size={40} /></div>
              <h4>Transparency</h4>
              <p>No hidden costs, no fine-print surprises. Just honest, legally verified deals.</p>
            </div>
            <div className="value-card card animate-up delay-2">
              <div className="value-icon"><Users size={40} /></div>
              <h4>Integrity</h4>
              <p>We uphold the highest ethical standards in every transaction we manage.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Become a part of our story" btnText="Join Us" />
    </div>
  );
};

export default About;
