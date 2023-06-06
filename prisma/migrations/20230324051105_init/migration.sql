/*
  Warnings:

  - The primary key for the `Actor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idActor` on the `Actor` table. All the data in the column will be lost.
  - You are about to alter the column `education` on the `Actor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `VarChar(15)`.
  - The primary key for the `Casts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `actorIdActor` on the `Casts` table. All the data in the column will be lost.
  - You are about to drop the column `idCasts` on the `Casts` table. All the data in the column will be lost.
  - You are about to drop the column `movieIdMovie` on the `Casts` table. All the data in the column will be lost.
  - You are about to drop the column `roletype` on the `Casts` table. All the data in the column will be lost.
  - The primary key for the `Director` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idDirector` on the `Director` table. All the data in the column will be lost.
  - You are about to drop the column `movieIdMovie` on the `Director` table. All the data in the column will be lost.
  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `directorIdDirector` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `filming_locaton` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `idMovie` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `name_movie` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `studioIdStudio` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `year_of_release` on the `Movie` table. All the data in the column will be lost.
  - The primary key for the `Studio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idStudio` on the `Studio` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `actorIdActor` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `directorIdDirector` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(40)` to `VarChar(20)`.
  - A unique constraint covering the columns `[userId]` on the table `Actor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Director` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Made the column `education` on table `Actor` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `actorId` to the `Casts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieId` to the `Casts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roletypr` to the `Casts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Director` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directorId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filming_location` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieName` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studioId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `years_of_release` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Made the column `country_of_release` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `language` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company_name` on table `Studio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Studio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company_type` on table `Studio` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Casts" DROP CONSTRAINT "Casts_actorIdActor_fkey";

-- DropForeignKey
ALTER TABLE "Casts" DROP CONSTRAINT "Casts_movieIdMovie_fkey";

-- DropForeignKey
ALTER TABLE "Director" DROP CONSTRAINT "Director_movieIdMovie_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_studioIdStudio_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_actorIdActor_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_directorIdDirector_fkey";

-- DropIndex
DROP INDEX "User_actorIdActor_key";

-- DropIndex
DROP INDEX "User_directorIdDirector_key";

-- AlterTable
ALTER TABLE "Actor" DROP CONSTRAINT "Actor_pkey",
DROP COLUMN "idActor",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "education" SET NOT NULL,
ALTER COLUMN "education" SET DATA TYPE VARCHAR(15),
ADD CONSTRAINT "Actor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Casts" DROP CONSTRAINT "Casts_pkey",
DROP COLUMN "actorIdActor",
DROP COLUMN "idCasts",
DROP COLUMN "movieIdMovie",
DROP COLUMN "roletype",
ADD COLUMN     "actorId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD COLUMN     "roletypr" VARCHAR(20) NOT NULL,
ADD CONSTRAINT "Casts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Director" DROP CONSTRAINT "Director_pkey",
DROP COLUMN "idDirector",
DROP COLUMN "movieIdMovie",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Director_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
DROP COLUMN "directorIdDirector",
DROP COLUMN "filming_locaton",
DROP COLUMN "idMovie",
DROP COLUMN "name_movie",
DROP COLUMN "studioIdStudio",
DROP COLUMN "year_of_release",
ADD COLUMN     "directorId" INTEGER NOT NULL,
ADD COLUMN     "filming_location" VARCHAR(20) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "movieName" VARCHAR(20) NOT NULL,
ADD COLUMN     "studioId" INTEGER NOT NULL,
ADD COLUMN     "years_of_release" VARCHAR(20) NOT NULL,
ALTER COLUMN "country_of_release" SET NOT NULL,
ALTER COLUMN "language" SET NOT NULL,
ALTER COLUMN "language" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "category" SET NOT NULL,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Studio" DROP CONSTRAINT "Studio_pkey",
DROP COLUMN "idStudio",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "company_name" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "company_type" SET NOT NULL,
ADD CONSTRAINT "Studio_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE user_year_birth_seq;
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "actorIdActor",
DROP COLUMN "directorIdDirector",
DROP COLUMN "idUser",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(20),
DROP COLUMN "gender",
ADD COLUMN     "gender" BOOLEAN NOT NULL,
ALTER COLUMN "year_birth" SET DEFAULT nextval('user_year_birth_seq'),
ALTER COLUMN "password" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE user_year_birth_seq OWNED BY "User"."year_birth";

-- CreateIndex
CREATE UNIQUE INDEX "Actor_userId_key" ON "Actor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Director_userId_key" ON "Director"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Director" ADD CONSTRAINT "Director_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actor" ADD CONSTRAINT "Actor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Casts" ADD CONSTRAINT "Casts_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Casts" ADD CONSTRAINT "Casts_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
