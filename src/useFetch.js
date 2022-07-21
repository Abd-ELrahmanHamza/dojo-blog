import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResponse = (response) => {
      if (!response.ok) {
        throw Error("Couldn't fetch data please try again");
      }
      return response.json();
    };
    const setResponse = (data) => {
      setData(data);
      setIsPending(false);
      setError(null);
    };

    const handleFetchError = (error) => {
      if (error.name === "AbortError") return;
      setError(error.message);
      setIsPending(false);
    };

    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(fetchResponse)
        .then(setResponse)
        .catch(handleFetchError);
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
