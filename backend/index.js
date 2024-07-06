const connectToMongo=require('./db');
const express = require('express')
var cors=require('cors')
const bodyParser = require('body-parser');

connectToMongo();
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
app.use('/api/auth',require('./Routes/Auth'))


let screens = [
  {
    id: 1,
    name: 'Screen 1',
    maxCapacity: 60,
    seatMap: [
      { rowNumber: 'A', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'available' },
        { seatNumber: 3, status: 'reserved' },
        { seatNumber: 4, status: 'available' }
      ] },
      { rowNumber: 'B', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'reserved' },
        { seatNumber: 3, status: 'available' },
        { seatNumber: 4, status: 'available' }
      ] },
      { rowNumber: 'C', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'reserved' },
        { seatNumber: 3, status: 'reserved' },
        { seatNumber: 4, status: 'available' }
      ] },
      { rowNumber: 'D', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'reserved' },
        { seatNumber: 3, status: 'available' },
        { seatNumber: 4, status: 'available' }
      ] }
    ]
  },
  {
    id: 2,
    name: 'Screen 2',
    maxCapacity: 60,
    seatMap: [
      { rowNumber: 'A', seats: [
        { seatNumber: 1, status: 'reserved' },
        { seatNumber: 2, status: 'available' },
        { seatNumber: 3, status: 'available' },
        { seatNumber: 4, status: 'available' }
      ] },
      { rowNumber: 'B', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'reserved' },
        { seatNumber: 3, status: 'reserved' },
        { seatNumber: 4, status: 'available' }
      ] },
      { rowNumber: 'C', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'reserved' },
        { seatNumber: 3, status: 'available' },
        { seatNumber: 4, status: 'available' }
      ] },
      { rowNumber: 'D', seats: [
        { seatNumber: 1, status: 'available' },
        { seatNumber: 2, status: 'available' },
        { seatNumber: 3, status: 'available' },
        { seatNumber: 4, status: 'available' }
      ] }
    ]
  }
];

app.get('/api/screen/:screenId', (req, res) => {
  const { screenId } = req.params;
  // Retrieve screen details based on screenId
  const screen = screens.find(screen => screen.id === parseInt(screenId));
  if (!screen) {
    return res.status(404).json({ error: 'Screen not found' });
  }
  res.json(screen);
});





app.listen(PORT, () => {
  console.log(`Movie web app backend listening is on http://localhost:${PORT}`)
  
})
