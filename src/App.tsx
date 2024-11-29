import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Features from './components/Features';
import ServiceFeatures from './components/ServiceFeatures';
import WhyYatri from './components/WhyYatri';
import CarTypes from './components/CarTypes';
import WhyChooseOneWay from './components/WhyChooseOneWay';
import DiscoveringIndia from './components/DiscoveringIndia';
import WhyChooseYatri from './components/WhyChooseYatri';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <main className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                INDIA'S <span>LEADING <br />
                ONE-WAY INTER-CITY </span><br />
                CAB SERVICE PROVIDER
              </h1>
            </div>
            <BookingForm />
            
          </div>
        </main>
        <Features />
        <ServiceFeatures />
        <WhyYatri />
        <CarTypes />
        <WhyChooseOneWay />
        <DiscoveringIndia />
        <WhyChooseYatri />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;