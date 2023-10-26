import { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/productores")
      .then((response) => response.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  },[] )
  return { data, loading };
}
