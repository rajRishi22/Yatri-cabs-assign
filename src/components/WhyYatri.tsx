import React from 'react';
import { Flag, Users, Smartphone, DollarSign } from 'lucide-react';

const WhyYatri: React.FC = () => {
  return (
    <section className="why-yatri">
      <h2>WHY <span className="highlight">YATRI</span> ?</h2>
      
      <div className="why-yatri-content">
        <div className="car-image">
          <img src="https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80" alt="Yatri Car" />
        </div>
        
        <div className="features-list">
          <div className="feature-item">
            <Flag className="feature-icon" />
            <div className="feature-text">
              <h3>FAST RESPONSE TIME</h3>
              <p>Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly.</p>
            </div>
          </div>

          <div className="feature-item">
            <Users className="feature-icon" />
            <div className="feature-text">
              <h3>VAST FLEET</h3>
              <p>We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Needs.</p>
            </div>
          </div>

          <div className="feature-item">
            <Smartphone className="feature-icon" />
            <div className="feature-text">
              <h3>EASY TO ORDER</h3>
              <p>Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.</p>
            </div>
          </div>

          <div className="feature-item">
            <DollarSign className="feature-icon" />
            <div className="feature-text">
              <h3>GREAT TARIFFS</h3>
              <p>Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYatri;