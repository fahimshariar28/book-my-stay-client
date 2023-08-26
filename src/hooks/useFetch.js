import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = (url) => {
  const { data, error, loading, refetch } = useQuery({
    queryKey: [url],
    queryFn: () => axios.get(url).then((res) => res.data),
  });
  return { data, error, loading, refetch };
};

export default useFetch;
