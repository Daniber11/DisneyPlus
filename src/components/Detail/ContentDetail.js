import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./ContentDetail.css";

import movieDetails from "../../movieDetails.json";

const ContentDetail = () => {
  // Extracción del id de los parámetros de la URL
  const { id } = useParams();
  const [detailData, setDetailData] = useState({}); // Variable de estado para almacenar los detalles de la película

  // Obtención de los detalles de la película según el id desde el archivo JSON
  useEffect(() => {
    const movie = movieDetails.find((movie) => movie.id === id);
    if (movie) {
      setDetailData(movie);
    } else {
      console.log("Película no encontrada en el archivo JSON");
    }
  }, [id]);

  return (
    <div className="detail-container">
      <div className="detail-background">
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>

      <div className="detail-image-title">
        <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className="detail-content-meta">
        <div className="detail-controls">
          <button className="detail-player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Repodrucir</span>
          </button>
          <button className="detail-trailer">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </button>
          <div className="detail-add-list">
            <span />
            <span />
          </div>
          <div className="detail-group-watch">
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="detail-sub-title">{detailData.subTitle}</div>
        <div className="detail-description">{detailData.description}</div>
      </div>
    </div>
  );
};

export default ContentDetail;
