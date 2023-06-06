import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CastsService {
  async allCasts(): Promise<any> {
    const Casts = await prisma.casts.findMany();
    return Casts;
  }

  async createCast(roletypr:any,movieId:any,actorId:any): Promise<any> {
    let Casts: any = await prisma.casts.create({
      data:{
       roletypr:roletypr,
       movieId:movieId,
       actorId:actorId
      }
    });
    
    return Casts;
  }
  async uptadeCast(id:any ,roletypr:string ): Promise<any> {
    let Casts: any = await prisma.casts.update({
      data: {
      roletypr:roletypr
        
      },
      where: {
        id:id
      }
    });
    
    return Casts;
  }

  async deleteCast(id: any): Promise<any> {
    let cast = await prisma.casts.findUniqueOrThrow({
      where: {
        id: id, 
      },
    });

    if (!cast) {
      return "cast not found";
    }

    let result: any = await prisma.casts.delete({
      where: {
        id: id,
      },
    });

    return "cast deleted";
  }
}
export default new CastsService();