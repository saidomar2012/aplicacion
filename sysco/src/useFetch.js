import { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/productores")
      .then((response) => response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  },[] )
  return { data, loading };
}
