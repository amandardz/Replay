import React from "react";
import { useEffect, useState } from "react";
import API from "../utils/API";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { set } from "mongoose";
import MusicPlayer from "../components/MusicPlayer";
import Container from "../components/Container";
import SearchResultsCard from "../components/SearchResultCard";
import Wrapper from "../components/Wrapper";

function Search() {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState([]);

  const [navbarHeight, setNavbarHeight] = useState(document.body.clientHeight);

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
          console.log(data.data.data.items);
          setResults(data.data.data.items);
          setNavbarHeight(data.data.data.items.length);
        })
        .catch((err) => console.error(err));
    }
  }, [search, isSubmitted]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Container className="d-flex flex-row">
        <Navbar />
        <Wrapper>
          <div className="d-flex justify-content-center">
            <SearchBar
              handleInputChange={handleInputChange}
              search={search}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div className="song-container justify-content-center d-flex">
            <Container>
              {results.length > 0 ? (
                results.map((result) => (
                  <SearchResultsCard
                    key={result.id}
                    title={result.snippet.title}
                    description={result.snippet.description}
                  />
                ))
              ) : (
                <h3>Search for songs!</h3>
              )}
            </Container>
          </div>
          <MusicPlayer />
        </Wrapper>
      </Container>
    </>
  );
}

export default Search;
