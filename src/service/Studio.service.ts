import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class StudioService {
  async allStudios(): Promise<any> {
    const studios = await prisma.studio.findMany();
    return studios;
  }

  async deleteStudio(id: any): Promise<any> {
    let Studio = await prisma.studio.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    if (!Studio) {
      return "Studio not found";
    }

    let result: any = await prisma.studio.delete({
      where: {
        id: id,
      },
    });

    return "Studio deleted";
  }

  
  async createStudio(company_type:any, city:any,founded:any,company_name:any): Promise<any> {
    let studio: any = await prisma.studio.create({
      data:{
        company_type:company_type,
        city:city,
        founded:founded,
        company_name:company_name,
      }
    });   
    
    return studio;
  }

  async updateStudio(id:any, company_type:any, city:any, founded:any, company_name:any): Promise<any> {
    let studio: any = await prisma.studio.update({
      data:{
        company_type: company_type,
        city: city,
        founded: founded,
        company_name: company_name
      },
      where: {
        id: id
      }
    });
    return studio;
  }
}

export default new StudioService();
