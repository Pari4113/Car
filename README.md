# Jehovah Jireh Car Services Website

A modern, responsive website built with Node.js (Express) and React.

## Getting Started

### 1) Install backend deps
```bash
npm install
```

### 2) Install frontend deps
```bash
cd client
npm install
```

### 3) Start backend
```bash
# from project root
npm start
```
Backend runs at http://localhost:5000

### 4) Start frontend (in another terminal)
```bash
cd client
npm start
```
Frontend runs at http://localhost:3000 (proxied to backend at 5000)

## API
- GET /api/services
- GET /api/time-slots
- POST /api/book-appointment

## Booking Form Collects
- Name, Email, Phone
- Car Model & Year
- Service Type
- Preferred Date & Time
- Additional Notes

## Notes
- Images used by the React app are under `client/public/images/`
- Update `server.js` to change services or timeslots
