-- CreateTable
CREATE TABLE "Videocard" (
    "id" SERIAL NOT NULL,
    "VideoTitle" TEXT NOT NULL,
    "ChannelName" TEXT NOT NULL,
    "VideoPicURL" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Videocard_pkey" PRIMARY KEY ("id")
);
