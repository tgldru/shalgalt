import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ActorService {
  async allActor(page: number, limit: number, haih:string): Promise<any> {
    const total = await prisma.actor.count({})
    const Actor = await prisma.actor.findMany({
        skip: (page - 1) * limit,
      take: limit,
      where:{
        education:{
          contains:haih
        },
      },
      }
    );
    
    return {
      Actor:Actor,
      total:total
    }
  }

  async createActor(education:any , userId:any): Promise<any> {
    let Actor: any = await prisma.actor.create({
      data: {
        education: education,
        userId:userId
      },
    });

    return Actor;
  }
  async uptadeActor(education:any, id:any,userId:any): Promise<any> {
    let Actor: any = await prisma.actor.update({
      data: {
        education: education,
        userId:userId
      },
      where: {
        id: id
      },
    });

    return Actor;
  }

  async deleteActor(id: any): Promise<any> {
    let actor = await prisma.actor.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    if (!actor) {
      return "actor not found";
    }

    let result: any = await prisma.actor.delete({
      where: {
        id: id,
      },
    });

    return "actor deleted";
  }
}

export default new ActorService();
