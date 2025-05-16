import { useQuery } from '@tanstack/react-query';
import { getMovieDetails, getMovieCredits } from '@/api/movieDetails';

export const useMovieDetails = (movieId: number) => {
  const detailsQuery = useQuery({
    queryKey: ['movie', movieId, 'details'],
    queryFn: () => getMovieDetails(movieId),
    enabled: !!movieId,
  });

  const creditsQuery = useQuery({
    queryKey: ['movie', movieId, 'credits'],
    queryFn: () => getMovieCredits(movieId),
    enabled: !!movieId,
  });

  return {
    details: detailsQuery.data,
    credits: creditsQuery.data,
    isLoading: detailsQuery.isLoading || creditsQuery.isLoading,
    error: detailsQuery.error || creditsQuery.error,
  };
}; 