import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const [error, setError] = useState<boolean | string>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setIsLoading(false);
        console.log(err);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
