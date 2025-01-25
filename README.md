# Inventory Management API

A RESTful API for managing inventory items with features like expiry tracking and stock management.

## Features

- Create, read, update, and delete inventory items
- Track item quantities and expiry dates
- Fill and use inventory stock
- Get expired items
- Input validation
- Error handling
- TypeScript support

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Express Validator
- Moment.js

## Prerequisites

- Node.js (v14 or higher)
- pnpm
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd inventory-management-api
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/inventory
   NODE_ENV=development
   ```

## Development

Start the development server:

```bash
pnpm dev
```

## Production

1. Build the project:

   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## API Endpoints

- `POST /api/inventory` - Create a new inventory item
- `GET /api/inventory/:itemId` - Get an inventory item by ID
- `PUT /api/inventory/:itemId` - Update an inventory item
- `DELETE /api/inventory/:itemId` - Delete an inventory item
- `POST /api/inventory/:itemId/fill` - Add stock to an inventory item
- `POST /api/inventory/:itemId/use` - Use stock from an inventory item
- `GET /api/inventory/expired` - Get all expired inventory items

## Request/Response Examples

### Create Inventory Item

Request:

```json
POST /api/inventory
{
  "itemName": "Example Item",
  "quantity": 100,
  "expiryDate": "2024-12-31T00:00:00.000Z"
}
```

Response:

```json
{
  "success": true,
  "message": "Inventory item created successfully",
  "data": {
    "itemName": "Example Item",
    "quantity": 100,
    "expiryDate": "2024-12-31T00:00:00.000Z",
    "_id": "..."
  }
}
```

## Error Handling

The API uses standard HTTP status codes and returns error messages in the following format:

```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information"
}
```

## License

ISC
