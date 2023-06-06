-- CreateTable
CREATE TABLE "Huwtsas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Huwtsas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Huwtsas" ADD CONSTRAINT "Huwtsas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
