const express = require('express');
const fetch = require('node-fetch');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

function processDataForFrontEnd(req, res) {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json'; 
  fetch(baseURL)
    .then((r) => r.json())
    .then((data) => {
      const clearEmptyData = data.filter((f) => f.geocoded_column);
      const refined = clearEmptyData.map((m) => ({
        organization: m.organization,
        lat: m.latitude,
        long: m.longitude
      }));
      return refined;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
}

app.get('/api', (req, res) => { processDataForFrontEnd(req, res) });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
