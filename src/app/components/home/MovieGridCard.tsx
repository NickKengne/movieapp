

import React from "react"
import { Movie } from "@/types/movie"
import { MovieCard } from "./movie-single"

export const MovieGridCard = ({movies}: {movies: Movie[]}) => {

    return (
        <div className="w-full h-[80vh] overflow-scroll grid md:grid-cols-4 grid-cols-1 gap-[10px]">
            {
                movies?.map((card: any, index: any) => (
                    <MovieCard key={card.id} movie={card} />
                ))   
            }
        </div>
    )
}


