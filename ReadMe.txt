# Finance Dashboard Backend

## Features
- User role management (admin, analyst, viewer)
- Financial records CRUD
- Dashboard analytics (summary + category)
- Role-based access control

## Tech Stack
- Node.js
- Express
- In-memory storage

## How to Run
npm install
node src/app.js

## API Endpoints
- POST /users
- GET /users
- POST /records
- GET /records
- DELETE /records/:id
- GET /dashboard/summary
- GET /dashboard/category

## Roles
- Admin: Full access
- Analyst: Read + dashboard
- Viewer: Read only

## Assumptions
- Authentication simplified using headers
- Data stored in memory

## Future Improvements
- Add MongoDB
- Add JWT authentication
- Add pagination