import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class clothesService {
  async allclothes(): Promise<any> {
    const clothes = await prisma.huwtsas.findMany({orderBy: {
      name: 'asc',
    }
  })
  if (clothes.length === 0) {
    return "no clotes";
  }
  return clothes;
}

  async createclothes(name:string , userId:any): Promise<any> {
    let clothes: any = await prisma.huwtsas.create({
      data: {
        name: name,
        userId:userId
      },
    });

    return clothes;
  }
  async uptadeclothes(name:string, id:any,userId:any): Promise<any> {
    let clothes: any = await prisma.huwtsas.update({
      data: {
        name: name,
        userId:userId
      },
      where: {
        id: id
      },
    });

    return clothes;
  }

  async deleteclothes(id: any): Promise<any> {
    let clothes = await prisma.huwtsas.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    if (!clothes) {
      return "clothes not found";
    }

    let result: any = await prisma.huwtsas.delete({
      where: {
        id: id,
      },
    });

    return "clothes deleted";
  }
}

export default new clothesService();
