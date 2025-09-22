/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "roleId" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Printer" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Printer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RepairStatus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RepairStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RepairRequest" (
    "id" SERIAL NOT NULL,
    "printerId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "accessories" TEXT,
    "statusId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepairRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RepairPart" (
    "id" SERIAL NOT NULL,
    "repairRequestId" INTEGER NOT NULL,
    "partName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RepairPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Shipping" (
    "id" SERIAL NOT NULL,
    "repairRequestId" INTEGER NOT NULL,
    "courier" TEXT NOT NULL,
    "trackingNumber" TEXT NOT NULL,
    "shippedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL,

    CONSTRAINT "Shipping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Note" (
    "id" SERIAL NOT NULL,
    "repairRequestId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "public"."Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Printer_serialNumber_key" ON "public"."Printer"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "RepairStatus_name_key" ON "public"."RepairStatus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Shipping_repairRequestId_key" ON "public"."Shipping"("repairRequestId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Printer" ADD CONSTRAINT "Printer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RepairRequest" ADD CONSTRAINT "RepairRequest_printerId_fkey" FOREIGN KEY ("printerId") REFERENCES "public"."Printer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RepairRequest" ADD CONSTRAINT "RepairRequest_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "public"."RepairStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RepairPart" ADD CONSTRAINT "RepairPart_repairRequestId_fkey" FOREIGN KEY ("repairRequestId") REFERENCES "public"."RepairRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Shipping" ADD CONSTRAINT "Shipping_repairRequestId_fkey" FOREIGN KEY ("repairRequestId") REFERENCES "public"."RepairRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Note" ADD CONSTRAINT "Note_repairRequestId_fkey" FOREIGN KEY ("repairRequestId") REFERENCES "public"."RepairRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Note" ADD CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
