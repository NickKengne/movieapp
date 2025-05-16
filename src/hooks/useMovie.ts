import { getMoviesBySearchText } from "@/api/movies";
import { useQuery } from "@tanstack/react-query";


export const useMovie = (inputSearchTextValue: string) => {
    const { data: moviesData, isLoading, error } = useQuery({
        queryKey: ['movies', inputSearchTextValue],
        queryFn: () => getMoviesBySearchText(inputSearchTextValue),
        enabled: inputSearchTextValue.length > 0
      });

      return {
        moviesData,
        isLoading,
        error
      }
}