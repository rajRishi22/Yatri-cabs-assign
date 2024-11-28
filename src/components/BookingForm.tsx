import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingDetails } from '../store/bookingSlice';

const BookingForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('outstation');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="booking-card">
      <div className="booking-tabs">
        <button 
          className={`tab ${activeTab === 'outstation' ? 'active' : ''}`}
          onClick={() => setActiveTab('outstation')}
        >
          Outstation
        </button>
        <button 
          className={`tab ${activeTab === 'local' ? 'active' : ''}`}
          onClick={() => setActiveTab('local')}
        >
          Local
        </button>
        <button 
          className={`tab ${activeTab === 'airport' ? 'active' : ''}`}
          onClick={() => setActiveTab('airport')}
        >
          Airport
        </button>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="From" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="To" />
        </div>
        <div className="form-group">
          <input type="datetime-local" placeholder="Pick up date" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Pick up at" />
        </div>
        <button type="submit" className="explore-button">
          EXPLORE CABS
        </button>
      </form>
    </div>
  );
};

export default BookingForm;