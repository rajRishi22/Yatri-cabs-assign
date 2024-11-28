import React from 'react';
import { Hand, MapPin, Car } from 'lucide-react';

const ServiceFeatures: React.FC = () => {
  return (
    <div className="service-features">
      <div className="feature-card">
        <Hand className="feature-icon" />
        <h3>RETURN FARE, NOT FAIR!</h3>
        <p>Why Pay For Return Journey When You Are Travelling One-Way? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Oneway Travel.</p>
      </div>

      <div className="feature-card">
        <MapPin className="feature-icon" />
        <h3>GPS BASED BILLING SYSTEM</h3>
        <p>Since The GPS Data Captures The Actual Distance And Time Traveled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.</p>
      </div>

      <div className="feature-card">
        <Car className="feature-icon" />
        <h3>NOW AVAILABLE ROUTES ARE!</h3>
        <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
      </div>
    </div>
  );
};

export default ServiceFeatures;