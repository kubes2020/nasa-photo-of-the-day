import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import ProfileCard from "./ProfileCard";

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);
  // const [title, setTitle] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}api_key=${API_KEY}`)
  //     .then((res) => {
  //       setNasaInfo(res.data);
  //       console.log("yep", nasaInfo);
  //     })
  //     .catch((err) => {
  //       console.log("you have an error with fetching nasaPic", err);
  //     });
  // }, []);

  return (
    <div className="App">
      <h1>My Title:</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <ProfileCard nasaPic={nasaInfo.url} />
    </div>
  );
}

export default App;

// my api_key:  oEG1UemRfQCzwhkYbS8q8fHPJZ6rCyamDC1iDzrQ
// get address & key:  https://api.nasa.gov/planetary/apod?api_key=oEG1UemRfQCzwhkYbS8q8fHPJZ6rCyamDC1iDzrQ
