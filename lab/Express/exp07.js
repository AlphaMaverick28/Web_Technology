const express = require('express');
const app = express();

const products = [
  { id: 101, name: 'Laptop', price: 999 },
  { id: 102, name: 'Mouse', price: 25 }
];

app.get('/', (req, res) => {
  res.json(products); // Sends the array of objects as a JSON response
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
