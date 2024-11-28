import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, setTripType } from '../store/bookingSlice';
import './BookingForm.css'; 

const BookingForm = () => {
  const dispatch = useDispatch();
  const { activeTab, tripType } = useSelector((state) => state.booking);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <div className="booking-card">
      <div className="booking-tabs">
        {['outstation', 'local', 'airport'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => dispatch(setActiveTab(tab))}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'outstation' && (
        <div className="trip-type">
          <button
            className={`trip-button ${tripType === 'one-way' ? 'active' : ''}`}
            onClick={() => dispatch(setTripType('one-way'))}
          >
            One Way
          </button>
          <button
            className={`trip-button ${tripType === 'round-trip' ? 'active' : ''}`}
            onClick={() => dispatch(setTripType('round-trip'))}
          >
            Round Trip
          </button>
        </div>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        {activeTab === 'outstation' && (
          <>
            <div className="form-group">
              <input type="text" placeholder="From" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="To" />
            </div>
            <div className="form-group">
              <input type="datetime-local" placeholder="Pick up date" />
            </div>
            {tripType === 'round-trip' && (
              <div className="form-group">
                <input type="datetime-local" placeholder="Return date" />
              </div>
            )}
          </>
        )}

        {activeTab === 'local' && (
          <>
            <div className="form-group">
              <input type="text" placeholder="Pickup City" />
            </div>
            <div className="form-group">
              <input type="datetime-local" placeholder="Pick up date" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Pick up at" />
            </div>
          </>
        )}

        {activeTab === 'airport' && (
          <>
            <div className="form-group">
              <input type="text" placeholder="From" />
            </div>
            <div className="form-group">
              <input type="datetime-local" placeholder="Pick up date" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Pick up at" />
            </div>
          </>
        )}

        <button type="submit" className="explore-button">
          EXPLORE CABS
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
