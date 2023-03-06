export const getQuerys = (query: string) => {
  const querys = location.search
    ?.split("?")[1]
    ?.split("&")
    .map((v) => {
      const tmp = v.split("=");
      const data = {
        key: tmp[0],
        value: tmp[1],
      };
      return data;
    });

  return querys?.find((v) => v.key === query)?.value;
};
