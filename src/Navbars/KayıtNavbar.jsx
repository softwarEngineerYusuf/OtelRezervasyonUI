import React, { useState } from "react";
import "./kayıtNavbar.css";
import { MdOutlineTravelExplore, MdPhone } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img from "../Assets/yurem.png.png";

function KayıtNavbar() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };
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
              <Link to="/" className="navLink">
                Anasayfa
              </Link>
            </li>

            <li className="navItem">
              <Link to="/Hakkımızda" className="navLink">
                Hakkımızda
              </Link>
            </li>

            <li className="phone-Item">
              <span className="phone-span">
                <FontAwesomeIcon
                  className="phone-icon"
                  icon={faPhone}
                  shake
                  size="5xs"
                  style={{ color: "var(--PrimaryColor)" }}
                />
                444 10 00
              </span>
            </li>

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
    </section>
  );
}
export default KayıtNavbar;
