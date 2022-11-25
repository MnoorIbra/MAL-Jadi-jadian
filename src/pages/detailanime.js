import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailAnime } from "../Api";
import "../styles/detail.css";

export default function DetailAnime() {
  const { malid } = useParams();
  const [detailanime, setDetailAnime] = useState([]);

  useEffect(() => {
    getDetailAnime(malid).then((result) => {
      setDetailAnime(result);
    });
  }, []);

  const DetailAnimeList = () => {
    if (detailanime.title == undefined) {
      return <div>
      <h2>Loading...</h2>
      <img src="/bocchi2.gif" alt="coba"/>
      </div>;
    }
    return (
      <div className="detail-wrapper">
        <img className="image" src={detailanime.images.jpg.image_url} />
        <div className="title">{detailanime.title} </div>
        <div className="airing">Airing: {detailanime.aired.string}</div>
        <div className="rating">{detailanime.rating}</div>
        <div className="rating">Score: {detailanime.score}</div>
        <div className="title">{detailanime.synopsis} </div>
      </div>
    );
  };

  return (
    <div className="container-detail">
      <DetailAnimeList />
    </div>
  );
}
