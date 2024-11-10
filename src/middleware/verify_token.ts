import express from "express";
import jwt from "jsonwebtoken";

const VerifyToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      status: 401,
      message: "Access Denied: No token provided",
    });
    return;
  }

  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) {
    res.status(500).json({ message: "JWT secret not found", status: 500 });
    return;
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Invalid Token",
    });
    return;
  }
};

export default VerifyToken;
