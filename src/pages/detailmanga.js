import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailManga } from "../Api";
import "../styles/detail.css";

export default function DetailManga() {
  const { malid } = useParams();
  const [detailmanga, setDetailManga] = useState([]);

  useEffect(() => {
    getDetailManga(malid).then((result) => {
      setDetailManga(result);
    });
  }, []);

  console.log(detailmanga);
  const DetailmangaList = () => {
    if (detailmanga.title == undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div className="detail-wrapper">
        <img className="image" src={detailmanga.images.jpg.image_url} />
        <div className="title">{detailmanga.title} </div>
        <div className="rating">{detailmanga.rating}</div>
        <div className="rating">Score: {detailmanga.score}</div>
        <div className="title">{detailmanga.synopsis} </div>
      </div>
    );
  };

  return (
    <div className="container-detail">
      <DetailmangaList />
    </div>
  );
}
