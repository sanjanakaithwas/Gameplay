const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const cities = [
  { name: 'City Yapkashnagar', distance: 60 },
  { name: 'Lihaspur', distance: 50 },
  { name: 'Narmis City', distance: 40 },
  { name: 'Shekharvati', distance: 30 },
  { name: 'Nuravaram', distance: 20 },
];

const vehicles = [
  { type: 'EV Bike', range: 60 },
  { type: 'EV Car', range: 100 },
  { type: 'EV SUV', range: 120 },
];

let fugitiveLocation = null;

app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

app.post('/fugitive', (req, res) => {
  fugitiveLocation = cities[Math.floor(Math.random() * cities.length)];
  res.json(fugitiveLocation);
});

app.post('/capture', (req, res) => {
  const { copChoices } = req.body;
  const successfulCapture = copChoices.some(
    (cop) => cop && cop.vehicle.range >= cop.city.distance
  );

  res.json({
    successfulCapture,
    capturingCop: copChoices.find((cop) => cop.vehicle.range >= cop.city.distance)?.name,
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});