import { MapPin, Bath, BedDouble, Square, Tag } from 'lucide-react';
import './PropertyCard.css';

const PropertyCard = ({ image, price, location, type, beds, baths, size, title }) => {
  return (
    <div className="property-card card">
      <div className="property-image">
        <img src={image} alt={title} />
        <div className="property-tag">
          <Tag size={14} />
          <span>{type}</span>
        </div>
      </div>
      <div className="property-content">
        <h4 className="property-price">{price}</h4>
        <h3 className="property-title">{title}</h3>
        <p className="property-location">
          <MapPin size={16} />
          <span>{location}</span>
        </p>
        <div className="property-meta">
          <div className="meta-item">
            <BedDouble size={18} />
            <span>{beds} Bed</span>
          </div>
          <div className="meta-item">
            <Bath size={18} />
            <span>{baths} Bath</span>
          </div>
          <div className="meta-item">
            <Square size={18} />
            <span>{size} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
