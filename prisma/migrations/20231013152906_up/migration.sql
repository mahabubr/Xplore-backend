/*
  Warnings:

  - You are about to drop the column `date` on the `services` table. All the data in the column will be lost.
  - Added the required column `date_from` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_to` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `how_day` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "date_from" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_to" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "how_day" INTEGER NOT NULL,
ADD COLUMN     "member" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "services" DROP COLUMN "date";
