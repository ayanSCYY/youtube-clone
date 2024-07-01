import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { VideoTitle, ChannelName, VideoPicURL } = await req.json();

    await prisma.videoCard.create({
        data: {
            VideoTitle,
            ChannelName,
            VideoPicURL,
        },
    });

    return NextResponse.json({ message: 'Video added successfully' });
}

export async function GET(req: Request) {
    const videoCards = await prisma.videoCard.findMany();
    return NextResponse.json(videoCards);
}
