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

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}
