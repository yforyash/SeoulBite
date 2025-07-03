const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// ✅ Enable CORS so frontend (Live Server) can talk to backend
app.use(cors());

// ✅ Enable JSON body parsing
app.use(express.json());

// 🔹 Default test route
app.get('/', (req, res) => {
  res.send('Welcome to SeoulBite Backend!');
});

// 🔹 Reservation POST route
app.post('/reserve', (req, res) => {
  const { name, email, date } = req.body;

  // ✅ Log the reservation in terminal
  console.log('Reservation received:', { name, email, date });

  // ✅ Send confirmation back to frontend
  res.send('Reservation received! Thank you, ' + name);
});

// 🔹 Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
