
import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function POST(req: Request) {

    const { VideoTitle, ChannelName, VideoPicURL} = await req.json();
  
    await prisma.videoCard.create({
        data: {
            VideoTitle,     
            ChannelName,    
            VideoPicURL
        }
      })

  return NextResponse.json({ message: 'Sign up successful' });
}

export async function GET(req: Request) {
    const videoCard = await prisma.videoCard.findMany();
    return NextResponse.json(videoCard);
}