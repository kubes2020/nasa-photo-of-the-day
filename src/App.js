import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import ProfileCard from "./ProfileCard";
import Title from "./Title";
import Explanation from "./Explanation";

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);
  // const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      // .get(`https://api.nasa.gov/planetary/apod?`)
      .then((res) => {
        setNasaInfo(res.data);
      })
      .catch((err) => {
        console.log("you have an error with fetching nasaInfo", err);
      });
  }, []);

  // console.log("nasaExp", nasaInfo.explanation);

  return (
    <div className="App">
      <Title title={nasaInfo.title} />
      {/* <h1 className="header-title">My Title:{nasaInfo.title}</h1> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <ProfileCard nasaPic={nasaInfo.url} />
      <Explanation description={nasaInfo.explanation} />
    </div>
  );
}

export default App;

// my api_key:  oEG1UemRfQCzwhkYbS8q8fHPJZ6rCyamDC1iDzrQ
// get address & key:  https://api.nasa.gov/planetary/apod?api_key=oEG1UemRfQCzwhkYbS8q8fHPJZ6rCyamDC1iDzrQ
