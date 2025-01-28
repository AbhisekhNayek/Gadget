# 🔥 Phoenix: IMF Gadget API Development Challenge 🚀

Welcome to the **IMF Gadget API**! This API securely manages gadgets for the Impossible Missions Force (IMF). 🕵️‍♂️

## 🌟 Features
- **Gadget Inventory**: Manage gadget details with CRUD operations.
- **Self-Destruct Sequence**: Trigger self-destruction for gadgets. 💥
- **Mission Success Probability**: Generate random success probabilities for each gadget.
- **Authentication**: Protect the API using JWT authentication. 🔐
- **Filter by Status**: Easily filter gadgets by their status.

---

## 📂 Project Structure
```plaintext
imf-gadget-api/
├── prisma/                     # Prisma schema and migrations
│   ├── schema.prisma
│
├── src/
│   ├── config/                 # Configuration files
│   ├── routes/                 # API route definitions
│   ├── controllers/            # Business logic for routes
│   ├── middlewares/            # Authentication and error handling
│   ├── utils/                  # Helper functions
│   ├── app.js                  # Express app setup
│   ├── server.js               # Server initialization
│
├── swagger.json                # Swagger API documentation
├── .env                        # Environment variables
├── package.json                # Dependencies
└── README.md                   # Documentation
```

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** v16 or above
- **MongoDB Atlas** or local MongoDB instance
- **Prisma CLI** (Install with `npm install -g prisma`)

### Step 1: Clone the Repository
```bash
git clone https://github.com/AbhisekhNayek/Gadget.git
cd Gadget
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the root directory:
```plaintext
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/imf"
JWT_SECRET="your_secret_key"
PORT=4000
```

### Step 4: Configure Prisma
Generate the Prisma client and sync the database:
```bash
npx prisma generate
npx prisma db push
```

### Step 5: Start the Server
Run the development server:
```bash
npm run dev
```

The API will be running at: `http://localhost:4000`

---

## 📖 API Documentation

### Swagger UI
Use the provided `swagger.json` to explore and test the API.

1. Import the `swagger.json` into tools like [Swagger Editor](https://editor.swagger.io/) or [Postman](https://www.postman.com/).
2. Or use Swagger UI with a library like [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express).

---

## 🚦 How to Test the API

### Step 1: Authentication
1. Generate a JWT token by logging in (or simulate it for testing).
2. Include the token in the `Authorization` header:
   ```plaintext
   Authorization: Bearer <your_token>
   ```

### Step 2: Test Endpoints
#### Using Postman or cURL
- **GET /gadgets**: Retrieve all gadgets with mission success probabilities.
- **POST /gadgets**: Add a new gadget (requires a name).
- **PATCH /gadgets/:id**: Update a gadget's details.
- **DELETE /gadgets/:id**: Mark a gadget as "Decommissioned."
- **POST /gadgets/:id/self-destruct**: Trigger self-destruction.

#### Using Swagger UI
1. Open `swagger.json` in Swagger Editor or a Swagger-compatible tool.
2. Test endpoints directly using the interactive interface.

---

## 🐛 Error Handling
- All errors return structured JSON responses.
- Example:
  ```json
  {
    "error": "Unauthorized",
    "message": "Invalid token"
  }
  ```

---

## 🔒 Security Features
- **JWT Authentication**: Protects API endpoints.
- **Input Validation**: Ensures safe and valid data entry.

---

## 🚀 Deployment
Deployed on **Render**.

---

## 📜 License
This project is licensed under the MIT License. Feel free to use and modify it!