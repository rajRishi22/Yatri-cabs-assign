import React from 'react';

const CarTypes: React.FC = () => {
  const carTypes = [
    {
      type: 'AC Sedans',
      models: 'Etios, Amaze, Dzire etc.',
      passengers: '4 Pax',
      idealFor: 'Comfortable trips with small families',
      fare: 'Rs.11/KM'
    },
    {
      type: 'AC Hatchbacks',
      models: 'Wagon R, Celerio, Micra etc.',
      passengers: '4 Pax',
      idealFor: 'Budget trips over short distances',
      fare: 'Rs.11/KM'
    },
    {
      type: 'AC SUV',
      models: 'Ertiga, Xylo etc.',
      passengers: '6-7 Pax',
      idealFor: 'Premium trips with large families',
      fare: 'Rs.13/KM'
    }
  ];

  return (
    <div className="car-types">
      <table className="car-types-table">
        <thead>
          <tr>
            <th>CAR TYPE</th>
            <th>MODEL INCLUDES</th>
            <th>PASSENGERS</th>
            <th>IDEAL FOR</th>
            <th>FARE</th>
          </tr>
        </thead>
        <tbody>
          {carTypes.map((car, index) => (
            <tr key={index}>
              <td>{car.type}</td>
              <td>{car.models}</td>
              <td>{car.passengers}</td>
              <td>{car.idealFor}</td>
              <td>{car.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTypes;