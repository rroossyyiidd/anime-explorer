type Meta = {
  current_page: number;
  has_next_page: boolean;
  last_visible_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  }
};

export type CommonResponse<T> = {
  data: T;
};

export type CommonResponseList<T> = {
  data: T;
  pagination: Meta;
};

export type ResponseError<TError = unknown> = {
  message: string;
  data?: TError;
};

export type TAnime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
    webp?: {
      image_url: string;
    };
  };
  score: number | null;
  members: number;
  episodes: number | null;
  type: string;
  status?: string;
  duration?: string;
  season?: string;
  synopsis?: string;
  trailer?: {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
  };
  genres?: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  rank?: number;
  popularity?: number;
  users?: number;
};


export type TAnimeListResponse = CommonResponseList<TAnime[]>;

export type TParamsAnimeList = {
  page: number;
  search?: string;
  limit?: number;
};

export type TParamsAnimeDetail = {
  id: number;
};

export type TAnimeDetailResponse = CommonResponse<TAnime>;
