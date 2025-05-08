import type {
  TAnimeListResponse,
  ResponseError,
  TParamsAnimeList,
} from "@/entities/type";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getListAnime } from "@/api";

export const useGetAnimeList = (
  params: TParamsAnimeList
): UseQueryResult<TAnimeListResponse, AxiosError<ResponseError>> => {
  return useQuery({
    queryKey: ["get-anime-list", params],
    queryFn: async () => await getListAnime(params),
  });
};
