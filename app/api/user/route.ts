import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { VideoTitle, ChannelName, VideoPicURL, VideoURL } = await req.json();

    await prisma.videoCard.create({
        data: {
            VideoTitle,
            ChannelName,
            VideoPicURL,
            VideoURL,
        },
    });

    return NextResponse.json({ message: 'Video added successfully' });
}

export async function GET() {
    const videoCards = await prisma.videoCard.findMany();
    return NextResponse.json(videoCards);
}

export async function DELETE() {
    const deleteResult = await prisma.videoCard.deleteMany({});
    return NextResponse.json({ count: deleteResult.count });
}


