import { useQuery } from "@tanstack/react-query";
import httpClient from "../utils/http";

export const useBooks = () => {
  return useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { data } = await httpClient.get(`/books`);

      return data;
    },
  });
};
