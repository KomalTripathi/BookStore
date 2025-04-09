import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cards from "./Cards";

function SearchResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation(); 

  useEffect(() => {
    const fetchResults = async () => {
      const params = new URLSearchParams(search);
      const query = params.get("q");

      try {
        const res = await axios.get(`http://localhost:4001/book/search?q=${query}`);
        setResults(res.data);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [search]);

  return (
    <div className="mt-24 px-4 md:px-20">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
