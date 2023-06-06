import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import MovieService from "../service/Movie.service";

const prisma = new PrismaClient();

class MovieController {
  async allMovie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let movies = await MovieService.allMovies();
    return res.json(movies);
  }

  async createMovie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let movie: any = await MovieService.createmovie(
      req.body.movieName,
      req.body.country_of_release,
      req.body.language,
      req.body.filming_location,
      req.body.years_of_release,
      req.body.category,
      req.body.studioId,
      req.body.directorId
    );
    console.log(movie);
    return res.json(movie);
  }

  async updateMovie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let movie: any = await MovieService.updatemovie(
      req.body.id,
      req.body.movieName,
      req.body.country_of_release,
      req.body.language,
      req.body.filming_location,
      req.body.years_of_release,
      req.body.category,
      req.body.studioId,
      req.body.directorId
    );

    return res.json(movie);
  }

  async deleteMovie(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let movie: any = await MovieService.deleteMovie(req.body.id);

    return res.json(movie);
  }
}

export default new MovieController();
