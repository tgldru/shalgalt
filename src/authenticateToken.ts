import { Router, NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.status(401)

  jwt.verify(token, process.env.SECRETJWT as string, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "invalid token" })
    } 
    req.body.user = user
    // console.log(user)
    next()
  });
}
