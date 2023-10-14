/*
  Warnings:

  - You are about to drop the column `available` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `personLimit` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `services` table. All the data in the column will be lost.
  - Added the required column `age` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availability` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availabilityType` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departure` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureTime` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnTime` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "services" DROP COLUMN "available",
DROP COLUMN "contact",
DROP COLUMN "personLimit",
DROP COLUMN "startDate",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "availability" INTEGER NOT NULL,
ADD COLUMN     "availabilityType" "ServiceAvail" NOT NULL,
ADD COLUMN     "day" INTEGER NOT NULL,
ADD COLUMN     "departure" TEXT NOT NULL,
ADD COLUMN     "departureTime" TEXT NOT NULL,
ADD COLUMN     "how_month" TEXT[],
ADD COLUMN     "included" TEXT[],
ADD COLUMN     "lat" TEXT NOT NULL,
ADD COLUMN     "long" TEXT NOT NULL,
ADD COLUMN     "notIncluded" TEXT[],
ADD COLUMN     "returnTime" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE TEXT;
