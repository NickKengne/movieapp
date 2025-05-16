"use client"

import { use } from 'react';
import { useMovieDetails } from '@/hooks/useMovieDetails';
import { Loader } from 'lucide-react';

export default function MovieDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { details, credits, isLoading, error } = useMovieDetails(Number(resolvedParams.id));

  // console.log(details, "details")
  // console.log(credits, "credits")

  if (isLoading) return <div className="min-h-screen flex justify-center items-center"><Loader className="animate-spin" size={40} color="yellow"/></div>;
  if (error) return <div className="min-h-screen flex justify-center items-center text-white">
    <div className="flex flex-col items-center">
        <p className="text-white text-2xl font-bold">Une erreur est survenue</p>
        <p className="text-white text-lg">Veuillez réessayer plus tard</p>
    </div>
  </div>;
  if (!details) return <div className="min-h-screen flex justify-center items-center text-white">
    <div className="flex flex-col items-center">
        <p className="text-white text-2xl font-bold">Film non trouvé</p>
        <p className="text-white text-lg">Veuillez réessayer avec un autre film</p>
    </div>
  </div>;

  const director: any = credits?.crew.find((person: any) => person.job === "Director"); // ici cest au cas ou nous voulons afficher les realisateurs
  const cast: any = credits?.cast; 

  return (
    <div className="p-8">
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
          alt={details.title}
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#23263a] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
          {details.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="mb-6">
        <div className="text-gray-400 font-bold text-xl mb-1">
          {details.release_date?.slice(0, 4)} <span className="mx-2">•</span> PG
        </div>
        <div className="text-2xl font-extrabold text-white">{details.title}</div>
      </div>
      <div>
        <h2 className="text-white text-xl font-semibold mb-4">Credits</h2>
        <div className="grid grid-cols-4 gap-4 justify-center items-center">
            {cast.map((actor: any) => (
                <CreditCard key={actor.id} actor={actor} />
            ))}
        </div>
        <div className="grid grid-cols-4 justify-center items-center mt-4">
            {director &&(
                <DirectorCard key={director.id} director={director} />
            )}
        </div>
      </div>
    </div>
  );
}

const CreditCard = ({actor}: {actor: any}) => {
    return (
        <div className="flex items-center gap-4" key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#23263a]"
            />
            <div>
              <div className="text-white text-lg font-bold">
                <span className="text-gray-400">Name:</span> {actor.name}
              </div>
              <div className="text-white text-lg">
                <span className="text-gray-400">Job:</span> {actor.known_for_department}
              </div>
            </div>
          </div>
    )
}

const DirectorCard = ({director}: {director: any}) => {
    return (
        <div className="flex items-center gap-4" key={director.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${director.profile_path}`}
              alt={director.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#23263a]"
            />
            <div>
              <div className="text-white text-lg font-bold">
                <span className="text-gray-400">Name:</span> {director.name}
              </div>
              <div className="text-white text-lg">
                    <span className="text-gray-400">Job:</span> {director.job}
                </div>
            </div>
          </div>
    )
}