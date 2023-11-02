import "./otelEkleNavbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/yurem.png.png";

function PersonelEklenavbar() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  const [maxPrice, setMaxPrice] = useState(1000);

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img className="yurem-img" src={img} alt="" />
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/AdminOrtakNavbar" className="navLink">
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
              <Link to="/Admin" className="navLink">
                <FontAwesomeIcon
                  className="kişi-icon"
                  icon={faUser}
                  size="lg"
                  style={{ color: "var(--PrimaryColor)" }}
                />
                <span className="admin-isim">Admin</span>
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink">
                <button className="btn-çıkış">
                  <div className="sign-çıkış">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                  </div>
                  <div className="çıkış-metin">Çıkış</div>
                </button>
              </Link>
            </li>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default PersonelEklenavbar;
