import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class MovieService {
  async allMovies(): Promise<any> {
    const movies = await prisma.movie.findMany();
    return movies;
  }

  async deleteMovie(id: number): Promise<any> {
    let Movie = await prisma.movie.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    if (!Movie) {
      return "Movie not found";
    }

    await prisma.movie.delete({
      where: {
        id: id,
      },
    });

    return "Movie deleted";
  }
  async createmovie(
    movieName: any,
    language: any,
    country_of_release: any,
    years_of_release: any,
    filming_location: any,
    category: any,
    studioId: any,
    directorId: any
  ): Promise<any> {
    let movie: any = await prisma.movie.create({
      data: {
        movieName: movieName,
        language: language,
        country_of_release: country_of_release,
        filming_location: filming_location,
        years_of_release: years_of_release,
        category: category,
        studioId: studioId,
        directorId: directorId,
      },
    });

    return movie;
  }
  async updatemovie(
    id: any,
    movieName: any,
    language: any,
    country_of_release: any,
    years_of_release: any,
    filming_location: any,
    category: any,
    studioId: any,
    directorId: any
  ): Promise<any> {
    let movies: any = await prisma.movie.update({
      data: {
        movieName: movieName,
        language: language,
        country_of_release: country_of_release,
        filming_location: filming_location,
        years_of_release: years_of_release,
        category: category,
        studioId: studioId,
        directorId: directorId,
      },
      where: {
        id: id,
      },
    });

    return movies;
  }
}

export default new MovieService();
