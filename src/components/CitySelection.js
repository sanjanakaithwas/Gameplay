import React from 'react';

const CitySelection = ({ cities, onCitySelect }) => {
  return (
    <div className="CitySelection">
      {cities.map((city, index) => (
        <div key={index}>
          <label>
            Cop {index + 1}:
            <select value={copChoices[index]?.city?.name || ''} onChange={(e) => onCitySelect(index, e.target.value)}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CitySelection;