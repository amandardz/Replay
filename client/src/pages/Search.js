import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper'
import SearchBar from "../components/SearchBar";
import { set } from "mongoose";
import MusicPlayer from "../components/MusicPlayer";
import Container from "../components/Container";
import SearchResultsCard from "../components/SearchResultCard";

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
                      channelId={result.snippet.channelId}
                      />
                ))
              ) : (
                <h3>Search for songs!</h3>
              )}
            </Container>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}

export default Search;