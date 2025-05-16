'use client'

import { Movie } from "@/types/movie"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader } from "lucide-react"

export const MovieCard = ({ movie }: { movie: Movie }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        router.push(`/movie/${movie.id}`);
    };

    return (
        <div className="rounded-md relative cursor-pointer" onClick={handleClick}>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="relative h-[60%] w-[100%] rounded-md object-cover"/>
            <div className="p-2">
                <p className="text-white font-bold">{movie.original_title}</p>
                <p className="text-gray-500">{movie.overview?.slice(0, 80) + "...."}</p>
            </div>
            {loading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <Loader className="animate-spin" size={48} color="yellow" />
                    <span className="ml-4 text-white text-lg font-semibold">Redirection...</span>
                </div>
            )}
        </div>
    )
}