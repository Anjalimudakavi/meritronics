/*
  Warnings:

  - You are about to drop the column `stationId` on the `Mpi` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stationName]` on the table `Station` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stationName` to the `Mpi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mpi" DROP CONSTRAINT "Mpi_stationId_fkey";

-- AlterTable
ALTER TABLE "Mpi" DROP COLUMN "stationId",
ADD COLUMN     "stationName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Station_stationName_key" ON "Station"("stationName");

-- AddForeignKey
ALTER TABLE "Mpi" ADD CONSTRAINT "Mpi_stationName_fkey" FOREIGN KEY ("stationName") REFERENCES "Station"("stationName") ON DELETE RESTRICT ON UPDATE CASCADE;
