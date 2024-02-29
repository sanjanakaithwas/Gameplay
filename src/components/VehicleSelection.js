import React from 'react';

const VehicleSelection = ({ vehicles, onVehicleSelect }) => {
  return (
    <div className="VehicleSelection">
      {vehicles.map((vehicle, index) => (
        <div key={index}>
          <label>
            Cop {index + 1} Vehicle:
            <select value={copChoices[index]?.vehicle?.type || ''} onChange={(e) => onVehicleSelect(index, e.target.value)}>
              <option value="">Select Vehicle</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.type} value={vehicle.type}>
                  {vehicle.type} (Range: {vehicle.range} km)
                </option>
              ))}
            </select>
          </label>
        </div>
      ))}
    </div>
  );
};

export default VehicleSelection;