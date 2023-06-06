import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import {encrypt} from '../ink.dic'
const prisma = new PrismaClient();

class UserService {
  async allUsers(page: number, limit: number, haih:string ): Promise<any> {
    // pagetoin
    const total = await prisma.user.count({})
    
    const Users = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,

      where:{
        gender:{
          
        },
      },
    });


    return {
      total: total,
      users: Users
    };
  }
  
  async createUser(name: any, gender: any,password:any,year_birth:any): Promise<any> {
    const encryptPass=await encrypt(password)
    let Users: any = await prisma.user.create({
      data:{
        name:name,
        gender:gender,
        year_birth:year_birth,
        password:encryptPass
      }
    });   
    
    return Users;
  }
  async uptadeUser(id:any,name: any, gender: any,password:any,year:any): Promise<any> {
    let Users: any = await prisma.user.update({
      data: {
        id:id,
        name:name,
        gender:gender,
        password:password,
        year_birth:year
      },
      where: {
        id:id
      }
      
    });
    return Users;
  }

  async deleteUser(id: any): Promise<any> {
    // let user = await prisma.user.findUniqueOrThrow({
    //   where: {
    //     id: id, 
    //   },
    // });

    // if (!user) {
    //   return "user not found";
    // }

    let result: any = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return result;
  }
}


export default new UserService();
