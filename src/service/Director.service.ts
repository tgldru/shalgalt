import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DirectorService {
  async allDirectors(): Promise<any> {
    const directors = await prisma.director.findMany();
    return directors;
  }

  async deletedirector(id: any): Promise<any> {
    let director = await prisma.director.findUniqueOrThrow({
      where: {
        id: id, // ... provide filter here
      },
    });

    if (!director) {
      return "director not found";
    }
    
    let result: any = await prisma.director.delete({
      where: {
        id: id,
      },
    });

    return "director deleted";
  }
  async createdirector(place_birth_director:any, userId:any,): Promise<any> {
    let director: any = await prisma.director.create({
      data:{
        place_birth_director:place_birth_director,
        userId:userId,
      }
    });   
    
    return director;
  }
  async updatedirector(id: any,place_birth_director:any, userId:any,): Promise<any> {
    let directors: any = await prisma.director.update({
      data:{
        userId:userId,
        place_birth_director:place_birth_director

      },
      where: {
        id:id
      }
    });   
    
    return directors;
  }
}

export default new DirectorService();
