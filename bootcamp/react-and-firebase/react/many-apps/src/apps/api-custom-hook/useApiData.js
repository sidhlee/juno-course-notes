const { useState, useEffect } = require('react');

export default function useApiData(initialUrl) {
  // Using url to restart the fetch
  const [url, setUrl] = useState(initialUrl);

  // Initialize loading state with false
  // because that represents what it does better
  // we're not loading until useEffect cb runs
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    // we can't make a useEffect callback asynchronous
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(url);

      const apiData = await response.json();

      setData(apiData);
      setIsLoading(false);
      setUrl('');
    };

    // prevent fetching when there is no url
    if (url) {
      fetchData();
    }
  }, [url]);

  return [data, isLoading, setUrl];
}
