import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import {decrypt} from "../ink.dic"
import { jwtGnerator } from "../token"
const prisma = new PrismaClient();

class loginController {
  async token(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let User :any= await prisma.user.findUnique({ 
      where : {
        id:req.body.id,
      }
    });
    if(!User) {
      return res.status(401).send("User not exist")
    }
    const decryptPass = decrypt(User.password)
    console.log(decryptPass)
    console.log(req.body.password)
    if( req.body.password != decryptPass){
      return res.status(401).json({ message: 'Incorrect password' })
    }
    const token = jwtGnerator(User)
    return res.json({token ,decryptPass});
  }
}

export default new loginController();
