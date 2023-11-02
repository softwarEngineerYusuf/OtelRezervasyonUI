import React, { useState } from "react";
import axios from "axios";
import BackgroundVideo from "../Video/marine_-_20223 (1080p).mp4";
import "./personelEkle.css"; // CSS dosyanızın yolu

function PersonelEkle() {
  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [departman, setDepartman] = useState("");

  const handlePersonelEkle = async () => {
    try {
      const response = await axios.post("https://localhost:7082/api/Calisan", {
        Isim: isim,
        Soyisim: soyisim,
        Telefon: telefon,
        Email: email,
        Departman: departman,
      });
      console.log("Personel eklendi:", response.data);

      // Alanları temizle
      setIsim("");
      setSoyisim("");
      setTelefon("");
      setEmail("");
      setDepartman("");

      // Sayfayı yeniden yükle
      window.location.reload();
    } catch (error) {
      console.error("Personel eklenirken hata oluştu:", error);
    }
  };

  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="box-pers">
        <span className="borderLine" />
        <form>
          <h2>Personel Ekle</h2>
          <p>Eklemek istediğiniz personelin bilgilerini eksiksiz doldurunuz.</p>
          <div className="inputBox">
            <input
              type="text"
              required
              value={isim}
              onChange={(e) => setIsim(e.target.value)}
            />
            <span>İsim</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required
              value={soyisim}
              onChange={(e) => setSoyisim(e.target.value)}
            />
            <span>Soyisim</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />
            <span>Telefon</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required
              value={departman}
              onChange={(e) => setDepartman(e.target.value)}
            />
            <span>Departman</span>
            <i />
          </div>
          <button
            className="button-70"
            type="button"
            onClick={handlePersonelEkle}
          >
            EKLE
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonelEkle;
