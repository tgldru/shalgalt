import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import UserService from "../service/User.service";
const prisma = new PrismaClient();

class UserController {
  async allUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 3;
    const haih =req.query.haih;
    const haih2 = req.query.haih2
    let Users :any= await UserService.allUsers(page, limit,haih as string , );
    return res.json(Users);
  }

  async createUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Users: any =await UserService.createUser(req.body.name, req.body.gender, req.body.password, req.body.year_birth);

    return res.json(Users);
    
  }

  async updateUsers(
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<any> {
    let Users: any = await UserService.uptadeUser(req.body.id, req.body.name,req.body.gender, req.body.password, req.body.year);

    return res.json(Users);
  }

  async deleteUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Users: any = await  UserService.deleteUser(req.body.id)

    return res.json(Users);
  } 
}

export default new UserController();
