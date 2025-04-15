import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/axios";
import { setFormatQueryString } from "@/util/format";

export type TFaqCategoryParams = {
  tab: string;
};
const fetchFaqCategoryList = async (params: TFaqCategoryParams) => {
  const queryString = setFormatQueryString(params);
  const response = await fetcher(`/api/faq/category${queryString}`);
  return response;
};

const useFaqCategoryList = (queryKey: string, params: TFaqCategoryParams) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => fetchFaqCategoryList(params),
    gcTime: 0,
  });
};

export default useFaqCategoryList;
