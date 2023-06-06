/*
  Warnings:

  - You are about to drop the `Huwtsas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Huwtsas" DROP CONSTRAINT "Huwtsas_userId_fkey";

-- AlterTable
ALTER TABLE "Casts" ALTER COLUMN "roletypr" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Huwtsas";
