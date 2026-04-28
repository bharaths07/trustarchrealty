import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = ({ title, btnText, btnLink }) => {
  return (
    <section className="cta-section section-padding">
      <div className="container text-center">
        <h2>{title || "Looking to buy or sell property?"}</h2>
        <p>Expert guidance for a seamless real estate experience.</p>
        <Link to={btnLink || "/contact"} className="btn btn-accent btn-large">
          {btnText || "Contact Us Now"}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
