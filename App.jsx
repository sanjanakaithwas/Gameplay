import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import CitySelection from './components/CitySelection';
import VehicleSelection from './components/VehicleSelection';
import Result from './components/Result';

// const cities = [
//   { name: 'City Yapkashnagar', distance: 60 },
//   { name: 'Lihaspur', distance: 50 },
//   { name: 'Narmis City', distance: 40 },
//   { name: 'Shekharvati', distance: 30 },
//   { name: 'Nuravaram', distance: 20 },
// ];

// const vehicles = [
//   { type: 'EV Bike', range: 60 },
//   { type: 'EV Car', range: 100 },
//   { type: 'EV SUV', range: 120 },
// ];

function App() {
  //const [copChoices, setCopChoices] = useState([null, null, null]);
  const [copChoices, setCopChoices] = useState([
  { city: null, vehicle: null },
  { city: null, vehicle: null },
  { city: null, vehicle: null },
]);
  const [fugitiveLocation, setFugitiveLocation] = useState(null);
  const [captureResult, setCaptureResult] = useState(null);

  // const handleCitySelection = (index, city) => {
  //   const newChoices = [...copChoices];
  //   newChoices[index] = city;
  //   setCopChoices(newChoices);
  // };
  const handleCitySelection = async (index, city) => {
    const citiesUrl = `${BASE_URL}/cities`;
    const response = await axios.get(citiesUrl);
    const fugitiveUrl = `${BASE_URL}/fugitive`;
    const response2 = await axios.post(fugitiveUrl);
    const cityIndex = response.data.findIndex((c) => c.name === city);
    const newCopChoices = [...copChoices];
    newCopChoices[index] = { city: response.data[cityIndex], vehicle: null };
    setCopChoices(newCopChoices);
    setFugitiveLocation(response2.data);
  };

  // const handleVehicleSelection = (index, vehicle) => {
  //   const newChoices = [...copChoices];
  //   newChoices[index] = { ...newChoices[index], vehicle };
  //   setCopChoices(newChoices);
  // };
  const handleVehicleSelection = async (index, vehicle) => {
    const vehiclesUrl = `${BASE_URL}/vehicles`;
    const response = await axios.get(vehiclesUrl);
    const vehicleIndex = response.data.findIndex((v) => v.type === vehicle);
    const newCopChoices = [...copChoices];
    newCopChoices[index] = { ...newCopChoices[index], vehicle: response.data[vehicleIndex] };
    setCopChoices(newCopChoices);
  };

  // const handleCapture = () => {
  //   const fugitiveLocation = cities[Math.floor(Math.random() * cities.length)];
  //   const successfulCapture = copChoices.some(
  //     (cop) => cop && cop.vehicle.range >= fugitiveLocation.distance
  //   );

  //   setCaptureResult(successfulCapture ? copChoices.find((cop) => cop.vehicle.range >= fugitiveLocation.distance).name : null);
  // };

  const handleCapture = async () => {
  if (fugitiveLocation) {
    const captureUrl = `${BASE_URL}/capture`;
    const data = { copChoices };
    const response = await axios.post(captureUrl, data);
    setCaptureResult(response.data.capturingCop);
  }
};

  return (
    <div className="App">
      <CitySelection cities={cities} onCitySelect={handleCitySelection} />
      <VehicleSelection vehicles={vehicles} onVehicleSelect={handleVehicleSelection} />
      <button className={captureResult ? (captureResult === 'Cop 1' ? 'result-success' : 'result-failure') : ''} disabled={!fugitiveLocation} onClick={handleCapture}>Capture</button>
      <Result captureResult={captureResult} />
    </div>
  );
}

export default App;