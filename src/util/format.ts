type Option = {
  label: string;
  value: string;
};

export const setFormatQueryString = (
  params: Record<string, string | number | boolean | null | undefined>
) => {
  const queryParams: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      queryParams.push(`${key}=${value}`);
    }
  });

  const queryString = queryParams.join("&");
  return queryString ? `?${queryString}` : "";
};

export function convertToLabelValue<T extends Record<string, string | number>>(
  list: T[],
  labelKey: keyof T,
  valueKey: keyof T
): Option[] {
  const allItem = [
    {
      label: "전체",
      value: "",
    },
  ];
  const items =
    list?.map(item => ({
      label: String(item[labelKey]),
      value: String(item[valueKey]),
    })) ?? [];

  return [...allItem, ...items];
}
