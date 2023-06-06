import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import StudioService from "../service/Studio.service";

const prisma = new PrismaClient();

class StudioController {
  async allStudio(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Studios :any= await StudioService.allStudios();
    return res.json(Studios);
  }

  async createStudio(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let Studios: any =await StudioService.createStudio(req.body.company_name, req.body.city, req.body.founded, req.body.company_type);
    console.log(Studios)
    return res.json(Studios);
    
  }

  async updateStudio(
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<any> {
    let Studios: any = await StudioService.updateStudio(req.body.id,req.body.company_name, req.body.city, req.body.founded, req.body.company_type);

    return res.json(Studios);
  }
  
  async deleteStudio(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    

    let Studios: any = await StudioService.deleteStudio(req.body.id)

    return res.json(Studios);
  }
}


export default new StudioController();
