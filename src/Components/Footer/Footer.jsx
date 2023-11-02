import React, { useEffect } from "react";
import "./footer.css";
import videom from "../../Assets/videom.mp4";
import { FiSend } from "react-icons/fi";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import img from "../../Assets/yurem.png.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={videom} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <h1 className="tatil-başlık">GÜVENİLİR REZERVASYON HARİKA TATİL</h1>
            <h2>TATİL PLANINIZI GERÇEĞE DÖNÜŞTÜRÜN</h2>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex"></a>
            </div>
            <div className="card-yurem">
              <div className="boxshadow" />
              <div className="main">
                <div className="top" />
                <div className="left side" />
                <div className="right side" />
                <div className="title-yurem">YUREM</div>
                <div className="button-container">
                  <button className="button">
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      stroke="red"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </button>
                  <button className="button">
                    <svg
                      className="svg twitter"
                      xmlns="http://www.w3.org/2000/svg"
                      height={24}
                      width={24}
                      fill="red"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    </svg>
                  </button>
                  <button className="button">
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="red"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Biz, teknolojik gelişmelerin öncüsü olan, dijital düşünen ve bunu
              kullanıcılarımıza mükemmel deneyimi sunmak için kullanan, genç ve
              dinamik bir şirketiz. Her ay en uygun seçeneklerle buluşturduğumuz
              20 milyonun üzerinde kullanıcımızla, Türkiye’de seyahat sektörünün
              online dönüşümüne yön veriyoruz.
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">KURUMSAL</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hakkımızda
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Basın
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Politikalar
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Güvenlik
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Erişilebilirlik
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERLER</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking.com
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                EnUygun
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                OtelZ
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">ŞEHİRLER</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                İstanbul
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bursa
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Aydın
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                İzmir
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Antalya
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small></small>
            <small>COPYRIGHTS RESERVED 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
