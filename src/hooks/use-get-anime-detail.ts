import type { TAnimeDetailResponse, ResponseError } from "@/entities/type";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getDetailAnime } from "@/api";

export const useGetAnimeDetail = (
  id: number
): UseQueryResult<TAnimeDetailResponse, AxiosError<ResponseError>> => {
  return useQuery({
    queryKey: ["get-anime-detail", id],
    queryFn: async () => await getDetailAnime(id),
  });
};
