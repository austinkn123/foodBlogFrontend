import { useState, useEffect } from 'react';

//Hook
const useFetch = (url) => {
  const [data, setData] = useState([{}]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url)
      //head
      .then(response => response.json())
      //body (function)
      .then(data => {
        console.log(data);
        setData(data);
      });

    }, [url])

  return { data };
}
 
export default useFetch;