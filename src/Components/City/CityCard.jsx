import React, { useEffect } from "react";
import "./cityCard.css";
import { Link } from "react-router-dom";
import Aos from "aos";

function CityCard({ card }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div class="wrapperTitle-3">
        <div class="bg">Keşfedilmeyi Bekleyen Şehirler</div>
        <div class="fg"> Keşfedilmeyi Bekleyen Şehirler</div>
      </div>
      <div className="card-container">
        {card.map((sehir) => (
          <Link
            data-aos="fade-up"
            className="nav-link active"
            aria-current="page"
            to={`/${sehir.isim}`}
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
    </section>
  );
}

export default CityCard;
