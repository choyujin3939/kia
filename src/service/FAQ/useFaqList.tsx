import { useInfiniteQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/client/axios";

export type TFaqParams = {
  limit?: number;
  offset?: number;
  tab: string;
  faqCategoryID?: string;
  question?: string;
};

export type TFaqResponse = {
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: [
    {
      id: number;
      categoryName: string;
      subCategoryName: string;
      question: string;
      answer: string;
    },
  ];
};

const useFaqList = (queryKey: string, params: TFaqParams) => {
  const response = useInfiniteQuery({
    queryKey: [queryKey, params],
    queryFn: ({ pageParam = 0 }) => {
      const config = {
        params: { ...params, page: pageParam },
      };
      return fetcher(["/api/faq", config]);
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      return lastPage.pageInfo.nextOffset !== lastPage.pageInfo.offset
        ? lastPage.pageInfo.nextOffset
        : undefined;
    },
    getPreviousPageParam: firstPage => {
      return firstPage.pageInfo.offset > 0 ? firstPage.pageInfo.prevOffset : undefined;
    },
    gcTime: 0,
  });

  return response;
};

export default useFaqList;
