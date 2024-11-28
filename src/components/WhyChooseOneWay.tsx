import React from 'react';

const WhyChooseOneWay: React.FC = () => {
  const leftFeatures = [
    'Instant Booking & Confirmation',
    'Confirmed Booking Immediately',
    'No Return Fare For One-Way Trip',
    'Clean & Professional Cab Services',
    'Transparent Billing With GPS Based Billing System'
  ];

  const rightFeatures = [
    'Pick-Up From Your House',
    'Dedicated Cab Just For You',
    'Drop To Your Desired Destination',
    'Completed More Than 20,000+ Oneway Trips',
    'Multiple Payment Option Including Credit'
  ];

  return (
    <section className="why-choose-oneway">
      <h2>WHY CHOOSE ONE WAY CAB?</h2>
      
      <div className="features-container">
        <div className="features-left">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              • {feature}
            </div>
          ))}
        </div>
        
        <div className="car-illustration">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" alt="Car Illustration" />
        </div>
        
        <div className="features-right">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              • {feature}
            </div>
          ))}
        </div>
      </div>
      
      <div className="discover-text">
        <p>DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className="highlight">INTERCITY CAR RENTALS</span> IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!</p>
      </div>
    </section>
  );
};

export default WhyChooseOneWay;