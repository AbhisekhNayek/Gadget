import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.config.js';

// Dummy user data (in real scenarios, you'd query a database)
const users = [
  { id: 1, username: 'user', password: 'password123' }
];

// POST: Login (authenticate user and generate token)
export const login = (req, res) => {
  const { username, password } = req.body;

  // Check if user exists and password matches
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Create JWT payload
  const payload = { id: user.id, username: user.username };

  // Generate JWT token (expires in 1 hour)
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  // Send token in response
  res.json({ token });
};
