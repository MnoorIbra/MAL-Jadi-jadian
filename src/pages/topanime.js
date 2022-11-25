import { getTopAnime } from "../Api";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/view.css";

export default function TopAnime() {
  const [popularAnime, setPopularAnime] = useState([]);
  useEffect(() => {
    getTopAnime().then((result) => {
      setPopularAnime(result);
    });
  }, []);

  const PopularAnimeList = () => {
    return popularAnime.map((anime, i) => {
      return (
        <div className="wrappper" key={i}>
          <div className="avatar">
            <NavLink to={"/detailanime/" + anime.mal_id}>
              <img src={anime.images.jpg.image_url} />
            </NavLink>
          </div>
          <NavLink to={"/detailanime/" + anime.mal_id}>
            <h3 className="headerDesc">{anime.title}</h3>
          </NavLink>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <PopularAnimeList />
    </div>
  );
}
