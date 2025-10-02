import { Movie, Rating } from "@/types";
import api from "@/lib/api";

interface GetAllMoviesResponse {
  movies: Movie[];
  total: number;
  page: number;
  pages: number;
}


export async function fetchMovies({
  page = 1,
  limit = 10,
  genre = "",
}: {
  page?: number;
  limit?: number;
  genre?: string;
}): Promise<GetAllMoviesResponse> {
  const response = await api.get<GetAllMoviesResponse>(
    `/movies?genre=${genre}&page=${+page}&limit=${+limit}`
  );
  return response.data;
}

export async function fetchHybridRecommendation(): Promise<Movie[]> {
  const response = await api.get<Movie[]>(`/movies/recommendations/personalized`);
  return response.data;
}

export async function fetchContentBasedRecommendation(): Promise<Movie[]> {
  const response = await api.get<Movie[]>(`/movies/recommendations/content-based`);
  return response.data;
}

export async function fetchMovieById(id: string): Promise<Movie> {
  const response = await api.get<Movie>(`/movies/${id}`);
  return response.data;
}

export async function fetchSimilarMovies(moviesId: string): Promise<Movie[]> {
  
  const response = await api.get<Movie[]>(`/movies/${moviesId}/similar-movies`, {
    withCredentials: false,
  });
  return response.data;
}

export async function fetchRatingsByMovieId(movieId: string): Promise<Rating[]> {
  const response = await api.get<Rating[]>(`/movies/${movieId}/ratings`);
  return response.data;
}


export async function fetchUserBasedRecommendation(): Promise<Movie[]> {
  const response = await api.get<Movie[]>(`/movies/recommendations/users-based`, {
    withCredentials: true,
  });
  return response.data;
}

export async function mutateRating({
  rating,
  comment,
  movieId,
}: {
  rating: number;
  comment: string;
  movieId: string;
}): Promise<Rating> {
  const response = await api.post<Rating>(
    `/movies/${movieId}/ratings`,
    { rating, comment },
    { withCredentials: true }
  );
  return response.data;
}

export async function deleteRating({
  movieId,
}: {
  movieId: string;
}): Promise<void> {
  await api.delete(`/movies/${movieId}/ratings`, { withCredentials: true });
}
