import Video from "@/components/landingpage/VideoComponent";

export default function LandingPage({ params }: { params: { movieId: string } }) {
    return <Video params={{ movieId: params.movieId }} />;
}
