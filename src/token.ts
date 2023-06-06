import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export  const jwtGnerator = (user: any): any => {
  return jwt.sign( user , process.env.SECRETJWT as string, {expiresIn: "1hr"});  
}