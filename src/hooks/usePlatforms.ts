import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
