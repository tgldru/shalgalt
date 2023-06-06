-- CreateTable
CREATE TABLE "Studio" (
    "idStudio" SERIAL NOT NULL,
    "company_name" VARCHAR(40),
    "city" VARCHAR(20),
    "founded" INTEGER NOT NULL,
    "company_type" VARCHAR(40),

    CONSTRAINT "Studio_pkey" PRIMARY KEY ("idStudio")
);

-- CreateTable
CREATE TABLE "Movie" (
    "idMovie" SERIAL NOT NULL,
    "name_movie" VARCHAR(40),
    "country_of_release" VARCHAR(20),
    "language" VARCHAR(15),
    "filming_locaton" VARCHAR(30),
    "year_of_release" INTEGER NOT NULL,
    "category" VARCHAR(20),
    "studioIdStudio" INTEGER NOT NULL,
    "directorIdDirector" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("idMovie")
);

-- CreateTable
CREATE TABLE "Director" (
    "idDirector" SERIAL NOT NULL,
    "place_birth_director" VARCHAR(20) NOT NULL,
    "movieIdMovie" INTEGER,

    CONSTRAINT "Director_pkey" PRIMARY KEY ("idDirector")
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "name" VARCHAR(40),
    "gender" VARCHAR(10),
    "year_birth" INTEGER NOT NULL,
    "password" VARCHAR(30),
    "directorIdDirector" INTEGER NOT NULL,
    "actorIdActor" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Actor" (
    "idActor" SERIAL NOT NULL,
    "education" VARCHAR(30),

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("idActor")
);

-- CreateTable
CREATE TABLE "Casts" (
    "idCasts" SERIAL NOT NULL,
    "roletype" VARCHAR(20),
    "movieIdMovie" INTEGER NOT NULL,
    "actorIdActor" INTEGER NOT NULL,

    CONSTRAINT "Casts_pkey" PRIMARY KEY ("idCasts")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_directorIdDirector_key" ON "User"("directorIdDirector");

-- CreateIndex
CREATE UNIQUE INDEX "User_actorIdActor_key" ON "User"("actorIdActor");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_studioIdStudio_fkey" FOREIGN KEY ("studioIdStudio") REFERENCES "Studio"("idStudio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Director" ADD CONSTRAINT "Director_movieIdMovie_fkey" FOREIGN KEY ("movieIdMovie") REFERENCES "Movie"("idMovie") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_directorIdDirector_fkey" FOREIGN KEY ("directorIdDirector") REFERENCES "Director"("idDirector") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_actorIdActor_fkey" FOREIGN KEY ("actorIdActor") REFERENCES "Actor"("idActor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Casts" ADD CONSTRAINT "Casts_movieIdMovie_fkey" FOREIGN KEY ("movieIdMovie") REFERENCES "Movie"("idMovie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Casts" ADD CONSTRAINT "Casts_actorIdActor_fkey" FOREIGN KEY ("actorIdActor") REFERENCES "Actor"("idActor") ON DELETE RESTRICT ON UPDATE CASCADE;
