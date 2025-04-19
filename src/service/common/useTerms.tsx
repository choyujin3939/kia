import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/client/axios";
import { setFormatQueryString } from "@/util/format";

export type TTermsParams = {
  termsClassID: string;
};

export type TTermsResponse = {
  terms: [
    {
      termsName: string;
      termsVersion: string;
      startDate: string;
      endDate: string;
      contents: string;
    },
  ];
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
