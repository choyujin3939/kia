import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/client/axios";
import { setFormatQueryString } from "@/util/format";

export type TTermsParams = {
  termsClassID: string;
};

export type TTerms = {
  termsName: string;
  termsVersion: number;
  startDate: number;
  endDate: number;
  contents: string;
};

export type TTermsResponse = {
  terms: TTerms[];
};
const fetchTerms = async (params: TTermsParams) => {
  const queryString = setFormatQueryString(params);
  const response = await fetcher(`/api/terms${queryString}`);
  return response;
};

const useTerms = (queryKey: string, params: TTermsParams) => {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => fetchTerms(params),
    gcTime: 0,
    select: data => data.terms,
  });
};

export default useTerms;
