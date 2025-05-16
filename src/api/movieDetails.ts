
interface MovieDetailsResponse {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieCreditsResponse {
  id: number;
  cast: Array<{
    id: number;
    name: string;
    character: string;
    profile_path: string;
  }>;
  crew: Array<{
    id: number;
    name: string;
    job: string;
    department: string;
  }>;
}

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export const getMovieDetails = async (movieId: number): Promise<MovieDetailsResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/movie/${movieId}?language=en-US`,
    {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'accept': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  return response.json();
};

export const getMovieCredits = async (movieId: number): Promise<MovieCreditsResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'accept': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie credits');
  }

  return response.json();
}; 