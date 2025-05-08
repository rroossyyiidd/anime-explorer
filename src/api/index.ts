import { API } from "@/hooks/use-axios";
import { ENDPOINTS } from "@/constants/api";
import type {
  TAnimeDetailResponse,
  TAnimeListResponse,
  TParamsAnimeList,
} from "@/entities/type";
import { routeURL } from "@/utils/url";

export const getListAnime = async (
  params: TParamsAnimeList
): Promise<TAnimeListResponse> => {
  const url = ENDPOINTS.ANIME.LIST;

  const { data } = await API({
    url,
    params: {
      q: params.search,
      page: params.page,
      limit: params.limit,
    },
    method: "GET",
  });

  return data;
};

export const getDetailAnime = async (
  id: number
): Promise<TAnimeDetailResponse> => {
  const url = routeURL(ENDPOINTS.ANIME.DETAIL, {
    id: id,
  });

  const { data } = await API({
    url,
    method: "GET",
  });

  return data;
};
