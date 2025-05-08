import { useState } from "react";
import { useGetAnimeList } from "@/hooks/use-get-anime-list";
import { scrollToTop } from "@/utils/scroll";

export const useAnimeList = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, error } = useGetAnimeList({
    page,
    search,
    limit: 24,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
    scrollToTop();
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  }

  const handler = {
    handlePageChange,
    handleSearchChange,
  };

  const state = {
    search,
    setSearch,
    page,
    setPage,
  };

  return {
    data,
    isLoading,
    isError,
    error,
    state,
    handler,
  };
};
