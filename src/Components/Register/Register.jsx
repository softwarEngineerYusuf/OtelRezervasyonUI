import React, { useState, useEffect } from "react";
import BackgroundVideo from "../../Video/marine_-_20223 (1080p).mp4";
import axios from "axios";
import "./register.css";
import Aos from "aos";
import { useUserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const { setUserSecondData } = useUserContext();
  const [isim, setİsim] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [şifre, setŞifre] = useState("");
  const history = useNavigate();

  const handleRegister = async () => {
    try {
      const userData = {
        isim: isim,
        soyisim: soyisim,
        email: email,
        telefon: telefon,
        sifre: şifre,
      };

      await axios.post("https://localhost:7082/api/Musteri", userData);

      // Temizleme ve sayfa yenileme

      history("/KayıtKullanıcıNavbar");
      setUserSecondData({ name: isim });
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <div className="box">
        <span className="borderLine" />
        <form data-aos="fade-up">
          <h2>Kayıt Ol</h2>
          <div className="inputBox ">
            <input
              type="text"
              required="required"
              value={isim}
              onChange={(e) => setİsim(e.target.value)}
            />
            <span>İsim</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={soyisim}
              onChange={(e) => setSoyisim(e.target.value)}
            />
            <span>Soyisim</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />
            <span>Telefon Numarası</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              value={şifre}
              onChange={(e) => setŞifre(e.target.value)}
            />
            <span>Şifre</span>
            <i />
          </div>
          <Link to="/KayıtKullanıcıNavbar">
            <button
              className="button-33"
              onClick={handleRegister}
              role="button"
              type="submit"
            >
              Kayıt Ol
              <div class="arrow-wrapper-33">
                <div class="arrow-33"></div>
              </div>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
