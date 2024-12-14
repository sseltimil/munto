// Query function to fetch gifys
// here i reuse the same function for both trending
import { useQuery } from "@tanstack/react-query";

// and search/filter. 
export const fetchGifs = async (query:string) => {
  const endpoint = query.trim()
    ? `/api/v1/gifs/search?q=${query}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=20`
    : `/api/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=20`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error('Failed to fetch GIFs');
  }
  const data = await response.json();
  return data.data;
};

export const useFetchGifys = (searchStr: string) => {
  return useQuery({
    queryKey: ['trendingGifs', searchStr],
    queryFn: () => fetchGifs(searchStr),
  });
}