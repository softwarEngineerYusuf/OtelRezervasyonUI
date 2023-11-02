import "./genelKullanıcıNavbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/yurem.png.png";

import video from "../Assets/video.mp4";
import { GrLocation, GrHome } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { useFilterContext } from "../FilterContext";

function GenelKullanıcıNavbar() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const {
    selectedCity,
    setSelectedCity,
    selectedHotel,
    setSelectedHotel,
    maxxPrice,
    setMaxxPrice,
  } = useFilterContext();

  const removeNavbar = () => {
    setActive("navBar");
  };

  const [maxPrice, setMaxPrice] = useState(1000);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleHotelChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
    setMaxxPrice(event.target.value);
  };

  const [navbarBackgroundColor, setNavbarBackgroundColor] =
    useState("transparent");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbarHeight = document.querySelector(".header").offsetHeight;

    if (scrollPosition > 300) {
      setNavbarBackgroundColor("rgb(256,256,256,0.8");
    } else {
      setNavbarBackgroundColor("transparent");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="navBarSection">
      <header
        className={`header ${
          active === "navBar activeNavbar" ? "activeNavbar" : ""
        }`}
        style={{ backgroundColor: navbarBackgroundColor }}
      >
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img className="yurem-img" src={img} alt="" />
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Anasayfa
              </Link>
            </li>

            <li className="navItem">
              <Link to="/Hakkımızda" className="navLink">
                Hakkımızda
              </Link>
            </li>
            <li className="navItem">
              <FontAwesomeIcon
                className="phoneKayit-icon"
                icon={faPhone}
                shake
                size="5xs"
                style={{ color: "var(--PrimaryColor)" }}
              />
              <a href="#" className="navLink">
                444 10 40
              </a>
            </li>
            <li className="navItem">
              <Link to="/GenelFavoriler">
                {" "}
                <button className="btn-fav">
                  {" "}
                  <span>Favoriler</span>
                </button>
              </Link>
            </li>
            <link rel="stylesheet" href="" />
            <button className="btn">
              <Link to="/Register">Kayıt Ol</Link>
            </button>
            <link rel="stylesheet" href="" />
            <button className="btn">
              <Link to="/Login">Giriş Yap</Link>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <h5>Güvenilir Rezervasyon, Harika Tatil</h5>
            <br />
            <h1 data-aos="fade-up" className="homeTitle">
              Tatil Planınızı Gerçeğe Dönüştürün
            </h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <div className="input flex">
                <input
                  type="text"
                  placeholder="Şehir Seçiniz..."
                  value={selectedCity}
                  onChange={handleCityChange}
                />
                <GrLocation className="icon" />
              </div>
            </div>
            <div className="destinationInput">
              <div className="input flex">
                <input
                  type="text"
                  placeholder="Otel Seçiniz..."
                  value={selectedHotel}
                  onChange={handleHotelChange}
                />
                <GrHome className="icon" />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label> </label>
                <h3 className="total">{maxPrice}₺</h3>
              </div>
              <div className="input flex">
                <input
                  type="range"
                  max="20000"
                  min="1000"
                  value={maxPrice}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
            <div className="searchOptions flex">
              <Link to="/GenelFiltre">
                <HiFilter className="icon" style={{ color: "white" }} />
                <span style={{ color: "white" }}>Filtrele</span>
              </Link>
            </div>
          </div>

          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default GenelKullanıcıNavbar;
