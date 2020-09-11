import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import ProfileCard from "./components/ProfileCard";
import Explanation from "./components/Explanation";
import styled, { keyframes } from "styled-components";
import Footer from "./components/Footer";

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);
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

  console.log("nasaInfo", nasaInfo);

  return (
    <div className="App">
      <header>Nasa Pic Of The Day</header>
      <div>
        <ProfileCard nasaInfo={nasaInfo} />
      </div>
      <div>
        <Explanation description={nasaInfo.explanation} />
      </div>
      <div>
        <Footer nasaInfo={nasaInfo} />
      </div>
    </div>
  );
}

export default App;

// my api_key:  oEG1UemRfQCzwhkYbS8q8fHPJZ6rCyamDC1iDzrQ
// get address & key:  https://api.nasa.gov/planetary/apod?api_key=oEG1UemRfQCzwhkYbS8q8fHPJZ6rCyamDC1iDzrQ
