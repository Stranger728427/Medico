import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Middleware to authenticate user
export const auth = (req, res, next) => {
  
  const token = req.cookies.userToken || req.cookies.adminToken;

  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ error: 'Invalid token.' });
  }
};

// Middleware to check for admin role
export const isAdminAuthenticated = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        error: 'You are not authorized to access this route it is only accesible by admin.'
      });
    }
   // console.log("Admin access granted");
    next();
  });
};






