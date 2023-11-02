import React, { useState } from "react";
import axios from "axios";
import "./otelEkle.css";
import BackgroundVideo from "../Video/marine_-_20223 (1080p).mp4";

function OtelEkle() {
  const [otelIsmi, setOtelIsmi] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [adres, setAdres] = useState("");
  const [sehir, setSehir] = useState("");
  const [telefon, setTelefon] = useState("");
  const [yildizSayisi, setYildizSayisi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOtel = {
      Isim: otelIsmi,
      TlFiyati: fiyat,
      Aciklama: aciklama,
      Adres: adres,
      Sehirİsim: sehir,
      Telefon: telefon,
      YildizSayisi: yildizSayisi,
      otelResmi: "null",
      // Diğer inputlardan gerekli verileri ekleyin
    };

    try {
      const response = await axios.post(
        "https://localhost:7082/api/Otel",
        newOtel
      );
      console.log("Kayıt başarıyla eklendi:", response.data);
      window.location.reload();
      // Kayıt başarıyla eklenirse işlemleri burada yönetebilirsiniz
    } catch (error) {
      console.error("Kayıt eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="box-otel">
        <span className="borderLine" />
        <form>
          <h2>Otel Ekleme</h2>
          <p>
            Lütfen eklemek istediğiniz otelin bilgilerini eksiksiz doldurunuz.
          </p>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setOtelIsmi(e.target.value)}
            />
            <span>Otel İsmi</span>
            <i />
          </div>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setFiyat(e.target.value)}
            />
            <span>Fiyat</span>
            <i />
          </div>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setAciklama(e.target.value)}
            />
            <span>Açıklama</span>
            <i />
          </div>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setAdres(e.target.value)}
            />
            <span>Adres</span>
            <i />
          </div>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setSehir(e.target.value)}
            />
            <span>Şehir</span>
            <i />
          </div>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setTelefon(e.target.value)}
            />
            <span>Telefon</span>
            <i />
          </div>
          <div className="inputBox-otel">
            <input
              type="text"
              required="required"
              onChange={(e) => setYildizSayisi(e.target.value)}
            />
            <span>Yıldız Sayısı</span>
            <i />
          </div>
          <button className="button-72" role="button" onClick={handleSubmit}>
            EKLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtelEkle;
