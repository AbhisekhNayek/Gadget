import express from 'express';
import gadgetRoutes from './routes/gadget.routes.js';
import loginRoutes from './routes/login.routes.js'; 
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import connectDB from './config/db.config.js';

const app = express();

// Default route (basic response)
app.get('/', (req, res) => {
    res.status(200).send('🚀 Welcome to the IMF Gadget API');
});

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/gadgets', gadgetRoutes);  
app.use('/auth', loginRoutes);

// Error handler (optional)
app.use(errorHandler);

export default app;
