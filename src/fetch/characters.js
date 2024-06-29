import { useQuery } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";

export const client = new QueryClient();

// fetch
async function getImages() {
  const response = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  );
  return await response.json();
}

// tanstack-query
export const useCharactersList = () => {
  const response = useQuery(
    {
      queryKey: ["characters-list"],
      queryFn: getImages,
    },
    client
  );

  return response;
};
