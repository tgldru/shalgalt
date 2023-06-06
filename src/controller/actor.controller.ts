import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import ActorService from "../service/Actor.service";

const prisma = new PrismaClient();

class ActorController {
  async allactor(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 3;
    const haih =req.query.haih 
    let actors = await ActorService.allActor(page , limit, haih as string );
    
    return res.json(actors);
  }

  async createActors(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Actors: any =await ActorService.createActor(req.body.education,req.body.userId);
    return res.json(Actors);
  }

  async updateActors(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Actors: any =await ActorService.uptadeActor(req.body.education,req.body.id,req.body.userId);

    return res.json(Actors);
  }

  async deleteActors(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Actors: any =await ActorService.deleteActor(req.body.id)

    return res.json(Actors);
  }
}

export default new ActorController();
