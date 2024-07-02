/*
  Warnings:

  - Added the required column `VideoURL` to the `VideoCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoCard" ADD COLUMN     "VideoURL" TEXT NOT NULL;
