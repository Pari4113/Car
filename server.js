const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Brake Services',
      description: 'Complete brake system inspection, repair, and replacement including brake pads, rotors, calipers, and brake fluid.',
      icon: '🛑'
    },
    {
      id: 2,
      name: 'Oil Change',
      description: 'Full-synthetic oil change service with multi-point inspection and filter replacement.',
      icon: '🛢️'
    },
    {
      id: 3,
      name: 'Coolant Flush',
      description: 'Engine coolant system flush and refill to prevent overheating and maintain engine temperature.',
      icon: '🌡️'
    },
    {
      id: 4,
      name: 'A/C Service & Repair',
      description: 'Air conditioning system diagnosis, repair, and maintenance to keep you cool in any weather.',
      icon: '❄️'
    },
    {
      id: 5,
      name: 'Exhaust Repair & Replacement',
      description: 'Complete exhaust system services including mufflers, catalytic converters, and welding repairs.',
      icon: '🔧'
    },
    {
      id: 6,
      name: 'Engine Swap',
      description: 'Professional engine replacement services with warranty and quality assurance.',
      icon: '⚙️'
    },
    {
      id: 7,
      name: 'Transmission Swap',
      description: 'Automatic and manual transmission replacement and repair services.',
      icon: '⚡'
    },
    {
      id: 8,
      name: 'Car Detailing',
      description: 'Interior and exterior detailing services to restore your vehicle\'s appearance.',
      icon: '✨'
    },
    {
      id: 9,
      name: 'Tire Sales & Repair',
      description: 'Quality tire sales, repair, and replacement services for all vehicle types.',
      icon: '🚗'
    },
    {
      id: 10,
      name: 'Used Car Sales',
      description: 'Quality pre-owned vehicles with thorough inspection and warranty options.',
      icon: '🚙'
    },
    {
      id: 11,
      name: 'Light Replacement',
      description: 'Headlight, taillight, and interior lighting replacement and repair services.',
      icon: '💡'
    },
    {
      id: 12,
      name: 'Tire Mounting & Balancing',
      description: 'Professional tire mounting, balancing, and alignment services.',
      icon: '⚖️'
    },
    {
      id: 13,
      name: 'Other',
      description: 'If you don\'t see your specific service listed, select this option and describe your issue in the additional notes.',
      icon: '🔍'
    }
  ];
  res.json(services);
});

app.get('/api/time-slots', (req, res) => {
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];
  res.json(timeSlots);
});

app.post('/api/book-appointment', (req, res) => {
  const { name, email, phone, carModel, serviceType, preferredDate, preferredTime, message } = req.body;
  
  // Here you would typically save to database and send email
  console.log('New appointment booking:', {
    name,
    email,
    phone,
    carModel,
    serviceType,
    preferredDate,
    preferredTime,
    message
  });

  // For now, just return success
  res.json({ 
    success: true, 
    message: 'Appointment booked successfully! We will contact you soon to confirm.' 
  });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

