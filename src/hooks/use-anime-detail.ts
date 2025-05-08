import { useGetAnimeDetail } from "@/hooks/use-get-anime-detail";
import { useParams } from "react-router-dom";
import { scrollToTop } from "@/utils/scroll";
import { useEffect } from "react";

export const useAnimeDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetAnimeDetail(
    id ? Number(id) : 0
  );

  useEffect(() => {
    scrollToTop();
  }, [id]);

  return {
    data: data?.data,
    isLoading,
    isError,
    error,
  };
};
