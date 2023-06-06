import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import CastService from "../service/Casts.service";

const prisma = new PrismaClient();
class CastController {
  async allCasts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Casts = await CastService.allCasts();
    return res.json(Casts);
  }

  async createCasts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Casts: any =await CastService.createCast(req.body.roletypr,req.body.actorId,req.body.movieId);

    return res.json(Casts);
  }

  async updateCasts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Casts: any = await CastService.uptadeCast(req.body.id,req.body.roletypr);

    return res.json(Casts);
  }

  async deleteCasts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Casts: any = await CastService.deleteCast(req.body.id)
    
    return res.json(Casts);
  }
}

export default new CastController();
