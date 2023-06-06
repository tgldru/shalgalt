import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import clothesService from "../service/Huwtsas.service";

const prisma = new PrismaClient();

class clothesController {
  async allclothes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let clothess = await clothesService.allclothes();
    return res.json(clothess);
  }

  async createclothes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let clothess: any =await clothesService.createclothes(req.body.name,req.body.userId);
    return res.json(clothess);
  }

  async updateclothes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let clothess: any =await clothesService.uptadeclothes(req.body.name,req.body.id,req.body.userId);

    return res.json(clothess);
  }

  async deleteclothes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let clothess: any =await clothesService.deleteclothes(req.body.id)

    return res.json(clothess);
  }
}

export default new clothesController();
