import React, { useState } from "react";
import axios from "axios";
import BackgroundVideo from "../Video/marine_-_20223 (1080p).mp4";
import "./şehirEkle.css";

function ŞehirEkle() {
  const [sehirAdi, setSehirAdi] = useState("");
  const [resimUrl, setResimUrl] = useState("");

  const handleSehirEkle = async () => {
    try {
      const response = await axios.post("https://localhost:7082/api/Sehir", {
        Isim: sehirAdi,
        SehirResim: resimUrl,
      });
      console.log("Şehir eklendi:", response.data);

      setSehirAdi("");
      setResimUrl("");

      window.location.reload();
    } catch (error) {
      console.error("Şehir eklenirken hata oluştu:", error);
    }
  };

  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="box-sehir">
        <span className="borderLine" />
        <form>
          <h2>Şehir Ekle</h2>
          <p>
            Lütfen eklemek istediğiniz şehrin bilgilerini eksiksiz doldurunuz.
          </p>
          <div className="inputBox-sehir">
            <input
              type="text"
              required
              value={sehirAdi}
              onChange={(e) => setSehirAdi(e.target.value)}
            />
            <span>Şehir Adı</span>
            <i />
          </div>
          <div className="inputBox-sehir">
            <input
              type="url"
              required
              value={resimUrl}
              onChange={(e) => setResimUrl(e.target.value)}
            />
            <span>Resim</span>
            <i />
          </div>
          <button className="button-75" type="button" onClick={handleSehirEkle}>
            EKLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ŞehirEkle;
