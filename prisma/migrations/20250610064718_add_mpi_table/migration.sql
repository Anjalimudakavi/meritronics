-- CreateTable
CREATE TABLE "Mpi" (
    "id" TEXT NOT NULL,
    "revision" TEXT NOT NULL,
    "effectiveDate" TIMESTAMP(3) NOT NULL,
    "purpose" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "materials" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "safety" TEXT NOT NULL,
    "processControl" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mpi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mpi" ADD CONSTRAINT "Mpi_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("stationId") ON DELETE RESTRICT ON UPDATE CASCADE;
