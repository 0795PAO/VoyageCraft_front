import React from 'react';
import PropTypes from 'prop-types';

// Componente ItineraryCard
const ItineraryCard = ({ image, description, options = [] }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col">
        <img className="h-48 w-full object-cover" src={image} alt="Itinerary" />
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Itinerary</div>
          <p className="mt-2 text-gray-500">{description}</p>
          <ul className="mt-4 space-y-2">
            {options.length > 0 ? (
              options.map((option, index) => (
                <li key={index} className="text-gray-700">
                  {option}
                </li>
              ))
            ) : (
              <li className="text-gray-700">No options available</li>
            )}
          </ul>
          <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Create Itinerary</button>
        </div>
      </div>
    </div>
  );
};

// Validaciones de PropTypes
ItineraryCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string)
};

// Valores por defecto para las props
ItineraryCard.defaultProps = {
  options: []
};

export default ItineraryCard;
