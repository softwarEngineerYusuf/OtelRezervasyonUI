import "./GenelSehir.css";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellConcierge,
  faPlane,
  faShirt,
  faUtensils,
  faWifi,
  faWind,
  faStar,
  faTurkishLiraSign,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFavoriteHotels } from "../FavoriteHotelsContex";
import { useUserContext } from "../UserContext";
function Hatay() {
  const [hatayHotels, setHatayHotels] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const { favoriteHotels, toggleFavorite } = useFavoriteHotels();
  const { fiyat, setFiyat } = useUserContext();

  useEffect(() => {
    axios
      .get("https://localhost:7082/api/Otel", {})
      .then((response) => {
        const hatayOtelListesi = response.data.$values.filter(
          (otel) => otel.sehirİsim === "Hatay"
        );
        setHatayHotels(hatayOtelListesi);
      })
      .catch((error) => console.error(error));
  }, []);

  const makeReservation = (hotel) => {
    setFiyat(hotel.tlFiyati);
  };
  const openModal = (hotel) => {
    setModalContent(hotel);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section className="main container section">
      <div class="wrapperTitle-3">
        <div class="bg"> Hayallerinizi Süsleyen Oteller </div>
        <div class="fg"> Hayallerinizi Süsleyen Oteller </div>
      </div>

      <div className="container">
        <div className="row">
          {hatayHotels.map((hotel, index) => (
            <div key={index} className="flip-card col-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="content-hotel">
                    <p className="hotel-name">{hotel.isim}</p>

                    <div className="rating-star">
                      {Array.from({ length: hotel.yildizSayisi }).map(
                        (_, starIndex) => (
                          <span key={starIndex} className="star">
                            &#9733;
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="price-hotel">{hotel.tlFiyati} TL</div>
                  <img
                    src={hotel.otelResmi}
                    alt=""
                    className="card-image-hotel"
                  />
                </div>
                <div className="flip-card-back">
                  <img className="dönenİmg" src={hotel.otelResmi} alt="" />
                  <div className="heart-container" title="Like">
                    <input
                      type="checkbox"
                      className="checkbox"
                      id={`favorite-checkbox-${index}`}
                      checked={favoriteHotels.includes(hotel)}
                      onChange={() => toggleFavorite(hotel)}
                    />
                    <div className="svg-container">
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-outline"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        className="svg-filled"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                      </svg>
                      <svg
                        className="svg-celebrate"
                        width={100}
                        height={100}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="10,10 20,20" />
                        <polygon points="10,50 20,50" />
                        <polygon points="20,80 30,70" />
                        <polygon points="90,10 80,20" />
                        <polygon points="90,50 80,50" />
                        <polygon points="80,80 70,70" />
                      </svg>
                    </div>
                  </div>

                  <div className="button-container-learn">
                    <button
                      className="learn-more"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => openModal(hotel)}
                    >
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow" />
                      </span>
                      <span className="button-text-hotel">DETAYLAR</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {modalContent && (
              <div>
                <div className="modal-header bg-light">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    {modalContent.isim}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 imgDiv">
                        <img
                          className="border-img"
                          src={modalContent.otelResmi}
                          width={300}
                          alt=""
                        />
                      </div>
                      <div className="col-md-6">
                        <h5>Bu Otel Hakkında</h5>
                        <div>
                          <p className="text">{modalContent.aciklama}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="left-aligned-heading">
                          Konaklama yerinde öne çıkanlar
                        </h5>
                      </div>
                      <div className="col-md-4 ms-auto">
                        <h4>
                          {Array.from({
                            length: modalContent.yildizSayisi,
                          }).map((_, index) => (
                            <FontAwesomeIcon
                              icon={faStar}
                              beat
                              size="2.5xs"
                              style={{ color: "#ffbb00" }}
                              key={index}
                            />
                          ))}
                        </h4>
                      </div>
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="content-container">
                            <div className="row">
                              <div className="col-md-6 d-flex flex-column flex-wrap">
                                <div className="icon-text-wrapper">
                                  <span
                                    className="icon "
                                    style={{ marginRight: "5px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faPlane}
                                      size="1.5x"
                                      beatFade
                                      style={{ color: "#030303" }}
                                    />
                                  </span>
                                  <span className="icon-text">
                                    Havaalanı transferi
                                  </span>
                                </div>
                                <div className="icon-text-wrapper">
                                  <span
                                    className="icon"
                                    style={{ marginRight: "5px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faWifi}
                                      beatFade
                                      size="2.5xs"
                                    />
                                  </span>
                                  <span className="icon-text">
                                    Ücretsiz internet
                                  </span>
                                </div>
                                <div className="icon-text-wrapper">
                                  <span
                                    className="icon"
                                    style={{ marginRight: "7px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faWind}
                                      beatFade
                                      size="2.5xs"
                                    />
                                  </span>
                                  <span className="icon-text">Klima</span>
                                </div>
                              </div>
                              <div className="col-md-6 d-flex flex-column flex-wrap">
                                <div className="icon-text-wrapper">
                                  <span
                                    className="icon"
                                    style={{ marginRight: "7px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faBellConcierge}
                                      beatFade
                                      size="2.5xs"
                                    />
                                  </span>
                                  <span className="icon-text">
                                    7/24 Resepsiyon
                                  </span>
                                </div>
                                <div className="icon-text-wrapper">
                                  <span
                                    className="icon"
                                    style={{ marginRight: "5px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faUtensils}
                                      beatFade
                                      size="3xs"
                                    />
                                  </span>
                                  <span className="icon-text">Restoran</span>
                                </div>
                                <div className="icon-text-wrapper">
                                  <span
                                    className="icon"
                                    style={{ marginRight: "5px" }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faShirt}
                                      beatFade
                                      size="3xs"
                                    />
                                  </span>
                                  <span className="icon-text">Çamaşırhane</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 ms-auto ">
                          <div
                            className="fiyat"
                            style={{
                              textAlign: "center",
                              borderRadius: "10px",
                              backgroundColor: "#167cc2",
                              padding: "8px",
                              margin: "5px auto",
                              width: "150px",
                            }}
                          >
                            <h5 style={{ color: "white" }}>Fiyat</h5>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "10px",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faTurkishLiraSign}
                                size="xl"
                                style={{ marginRight: "10px" }}
                              />
                              <span
                                className="number"
                                style={{ fontSize: "27px" }}
                              >
                                {modalContent.tlFiyati}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row contact">
                      <div className="col-md-6 ms-auto ">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          size="lg"
                          style={{ marginRight: "10px" }}
                        />
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                          Adres:
                        </span>
                        <div>
                          <p>{modalContent.adres}</p>
                        </div>
                      </div>
                      <div className="col-md-6 ms-auto phone">
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="lg"
                          style={{ marginRight: "10px" }}
                        />
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                          Telefon:
                        </span>
                        <div>
                          <p>{modalContent.telefon}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://i.pinimg.com/736x/f9/46/5a/f9465aca69c44d042816f94af524be9e.jpg"
                        className="d-block w-100"
                        alt="Resim 1"
                        width="300"
                        height="300"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://img.aydinlik.com.tr/rcman/Cw1280h720q95gc/storage/files/images/2023/06/11/antalyanin-en-iyi-otelleri-antalya-en-iyi-oteller-antalya-oteller-antalya-otelleri-antalya-otel-antalya-otel-fiyatlari-antalya-5-yildizli-oteller-tEVR.jpg"
                        className="d-block w-100 "
                        alt="Resim 2"
                        width="300"
                        height="300"
                      />
                    </div>
                    {/* Daha fazla resim eklemek isterseniz aynı yapıyı devam ettirebilirsiniz */}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="modal-footer">
                  <Link to="/KullanıcıRezervasyon">
                    <button
                      type="button"
                      className="btn btn-primary button"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        makeReservation(modalContent);
                        closeModal();
                      }}
                    >
                      Rezervasyon Yap
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hatay;
