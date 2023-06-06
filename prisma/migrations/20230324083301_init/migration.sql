-- DropIndex
DROP INDEX "User_name_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "year_birth" DROP DEFAULT;
DROP SEQUENCE "user_year_birth_seq";
