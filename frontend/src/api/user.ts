import { User } from "@/types";
import api from "@/lib/api";
import { Movie } from "@/types";


export async function fetchAuthUser(): Promise<User> {
  const response = await api.get<User>("/users/me", {
    withCredentials: true,
  });
  return response.data;
}

export async function updateUserPreferences({
  favoriteActors = [],
  favoriteDirectors = [],
  favoriteGenres = [],
}: {
  favoriteGenres: string[];
  favoriteActors: string[];
  favoriteDirectors: string[];
}): Promise<User> {
  const response = await api.put<User>(
    "/users/preferences",
    { favoriteActors, favoriteDirectors, favoriteGenres },
    { withCredentials: true }
  );
  return response.data;
}


export async function fetchFavorites(): Promise<Movie[]> {
  const response = await api.get<Movie[]>("/users/me/favorites", {
    withCredentials: true,
  });
  return response.data;
}

export async function addFavorite(movieId: string): Promise<Movie[]> {
  const response = await api.post<Movie[]>(
    "/users/me/favorites",
    { movieId },
    { withCredentials: true }
  );
  return response.data;
}

export async function removeFavorite(movieId: string): Promise<Movie[]> {
  const response = await api.delete<Movie[]>(`/users/me/favorites/${movieId}`, {
    withCredentials: true,
  });
  return response.data;
}


export async function fetchWatchlist(): Promise<Movie[]> {
  const response = await api.get<Movie[]>("/users/me/watchlist", {
    withCredentials: true,
  });
  return response.data;
}

export async function addToWatchlist(movieId: string): Promise<Movie[]> {
  const response = await api.post<Movie[]>(
    "/users/me/watchlist",
    { movieId },
    { withCredentials: true }
  );
  return response.data;
}

export async function removeFromWatchlist(movieId: string): Promise<Movie[]> {
  const response = await api.delete<Movie[]>(`/users/me/watchlist/${movieId}`, {
    withCredentials: true,
  });
  return response.data;
}
