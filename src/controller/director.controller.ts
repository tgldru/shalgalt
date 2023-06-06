import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import DirectorService from "../service/Director.service";

const prisma = new PrismaClient();

class DirectorController {
  async allDirector(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Directors = await DirectorService.allDirectors();
    return res.json(Directors);
  }

  async createDirector(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let director: any =await DirectorService.createdirector(req.body.place_birth_director, req.body.userId);
    console.log(director)
    return res.json(director);
    
  }

  async updateDirecter(
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<any> {
    let director: any = await DirectorService.updatedirector(req.body.id,req.body.place_birth_director,req.body.userId);

    return res.json(director);
  }

  async deleteDirector(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let director: any = await  DirectorService.deletedirector(req.body.id)

    return res.json(director);
  } 
}


export default new DirectorController();
