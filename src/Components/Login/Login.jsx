import "./login.css";
import React, { useState, useEffect } from "react";
import BackgroundVideo from "../../Video/marine_-_20223 (1080p).mp4";
import Aos from "aos";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const provider = new GoogleAuthProvider();

function Login() {
  const { setUserData } = useUserContext();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSifre, setLoginSifre] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://localhost:7082/api/Musteri");
      const musteriList = response.data.$values;

      const foundMusteri = musteriList.find(
        (musteri) =>
          musteri.email === loginEmail && musteri.sifre === loginSifre
      );

      if (foundMusteri) {
        if (loginEmail === "admin@gmail.com" && loginSifre === "admin") {
          setError(
            "Admin olarak giriş yapıldı, admin sayfasına yönlendiriliyorsunuz."
          );
          setTimeout(() => {
            history("/Admin"); // Admin sayfasına yönlendirme
          }, 1000);
        } else {
          setError("Giriş başarılı, ana sayfaya yönlendiriliyorsunuz.");
          setUserData({ name: foundMusteri.isim });

          setTimeout(() => {
            history("/Kullanıcı"); // Ana sayfaya yönlendirme
          }, 1000);
        }
      } else {
        setError("Lütfen bilgilerinizi doğru giriniz.");
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
    }
  };

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential.accessToken;
      const user = data.user;
      if (user) {
        history("/Kullanıcı");
      }
    } catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(credential);
    }
  };

  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="box">
        <span className="borderLine" />
        <form data-aos="fade-up" onSubmit={handleLogin}>
          <h2>Giriş Yap</h2>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <span>Email</span>
            <i />
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              value={loginSifre}
              onChange={(e) => setLoginSifre(e.target.value)}
            />
            <span>Şifre</span>
            <i />
          </div>
          <div onClick={googleLogin} className="google">
            <div>
              <FcGoogle className="icongoogle" />
            </div>
            Google ile Giriş Yap
          </div>
          <button className="button-33" role="button" type="submit">
            Giriş Yap
            <div class="arrow-wrapper-33">
              <div class="arrow-33"></div>
            </div>
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
