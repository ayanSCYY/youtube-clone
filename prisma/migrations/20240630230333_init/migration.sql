/*
  Warnings:

  - You are about to drop the `Videocard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Videocard";

-- CreateTable
CREATE TABLE "VideoCard" (
    "id" SERIAL NOT NULL,
    "VideoTitle" TEXT NOT NULL,
    "ChannelName" TEXT NOT NULL,
    "VideoPicURL" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VideoCard_pkey" PRIMARY KEY ("id")
);
