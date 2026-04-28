import { ArrowRight, CheckCircle } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, features, accent = false }) => {
  return (
    <div className={`service-card card ${accent ? 'accent-card' : ''}`}>
      <div className="service-icon">
        <Icon size={40} />
      </div>
      <div className="service-body">
        <h3>{title}</h3>
        <p className="service-desc">{description}</p>
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>
              <CheckCircle size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
