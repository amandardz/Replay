import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper'
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";
import SearchResultsCard from "../components/SearchResultCard";

function Search() {

  const [search, setSearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search && isSubmitted) {
      axios
        .get("/api/youtube", { params: { query: search } })
        .then((data) => {
          if (data.data.data.length === 0) {
            throw new Error("No results found");
          }
          if (data.data.data.length === "error") {
            throw new Error(data.data.data.message);
          }
          setSearch("");
          setIsSubmitted(false);
          setResults(data.data.data.items);
        })
        .catch((err) => console.error(err));
    }
  }, [search, isSubmitted]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Container className='background'>
        <Navbar />
        <Wrapper>
          <div className="d-flex justify-content-center">
            <SearchBar
              handleInputChange={handleInputChange}
              search={search}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div className="justify-content-center d-flex">
            <Container>
              {results.length > 0 ? (
                results.map((result) => (
                  <SearchResultsCard 
                    key={result.etag}
                    title={result.snippet.title}
                    channel={result.snippet.channelTitle}
                    linkId={result.id.videoId}
                    description={result.snippet.description}
                    thumbnail={result.snippet.thumbnails.default}
                  />
                ))
              ) : (
                <h3 className='pt-2'>Search for videos!</h3>
              )}
            </Container>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}

export default Search;