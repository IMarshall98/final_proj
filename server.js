const express = require('express');
const fetch = require('node-fetch');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

function processDataForFrontEnd(req, res) {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'; // Enter the URL for the data you would like to retrieve here

  // Your Fetch API call starts here
  // Note that at no point do you "return" anything from this function -
  // it instead handles returning data to your front end at line 34.
  fetch(baseURL)
    .then((r) => r.json())
    .then((data) => {
      const clearEmptyData = data.filter((f) => f.geocoded_column_1);
      const refined = clearEmptyData.map((m) => ({
        category: m.category,
        name: m.name,
        latLong: m.geocoded_column_1.coordinates
      }));
      return refined;
    })
    .then((data) => {
      return data.reduce((result, current) => {
        if (!result[current.category]) {
          result[current.category] = [];
        }
        result[current.category].push(current);
        return result;
      }, {});
    })
    .then((data) => {
      const reformattedData = Object.entries(data).map((m) => {
        console.log(m);
        return {
          y: m[1].length,
          label: m[0]
        };
      });
      return reformattedData;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data });
      console.log(data); // here's where we return data to the front end
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
