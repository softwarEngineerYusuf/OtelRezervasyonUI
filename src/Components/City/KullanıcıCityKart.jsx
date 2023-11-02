import React, { useEffect } from "react";
import "./kullanıcıCityCard.css";
import { Link } from "react-router-dom";
import Aos from "aos";

function KullanıcıCityCard({ card }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="card-container">
      {card.map((sehir) => (
        <Link
          data-aos="fade-up"
          className="nav-link active"
          aria-current="page"
          to={`Kullanıcı/${sehir.isim}`}
          key={sehir.Id}
        >
          <div
            className="card custom-card"
            style={{
              backgroundImage: `url(${sehir.sehirResim})`,
            }}
          >
            <div className="card-overlay">
              <h5 className="card-title">{sehir.isim}</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default KullanıcıCityCard;
