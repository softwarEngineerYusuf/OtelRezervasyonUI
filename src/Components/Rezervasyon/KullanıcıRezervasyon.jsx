import { useState, React } from "react";
import "./kullanıcıRezervasyon.css";
import { Link, link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import { loadStripe } from "@stripe/stripe-js";

function KullanıcıRezervasyon() {
  const [isChecked, setIsChecked] = useState(false);
  const [ad, setAd] = useState();
  const [soyad, setSoyad] = useState();
  const [email, setEmail] = useState();
  const [telefon, setTelefon] = useState();
  const [kisiSayisi, setKisiSayisi] = useState();
  const [girisTarihi, setGirisTarihi] = useState();
  const [cikisTarihi, setCikisTarihi] = useState();
  const [kartUzerindekiAdSoyad, setKartUzerindekiAdSoyad] = useState();
  const [kartNumarasi, setKartNumarasi] = useState();
  const [sonKullanmaAy, setSonKullanmaAy] = useState();
  const [sonKullanmaYil, setSonKullanmaYil] = useState();
  const [cvc, setCvc] = useState();

  const { fiyat } = useUserContext();

  const uygulananİndirim = fiyat * kisiSayisi * (10 / 100);
  const indirimliFiyat = fiyat * kisiSayisi - uygulananİndirim;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "ad":
        setAd(value);
        break;
      case "soyad":
        setSoyad(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telefon":
        setTelefon(value);
        break;
      case "kisiSayisi":
        setKisiSayisi(value);
        break;
      case "girisTarihi":
        setGirisTarihi(value);
        break;
      case "cikisTarihi":
        setCikisTarihi(value);
        break;
      case "kartUzerindekiAdSoyad":
        setKartUzerindekiAdSoyad(value);
        break;
      case "kartNumarasi":
        setKartNumarasi(value);
        break;
      case "sonKullanmaAy":
        setSonKullanmaAy(value);
        break;
      case "sonKullanmaYil":
        setSonKullanmaYil(value);
        break;
      case "cvc":
        setCvc(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section className="container-reserv">
        <header className="header-res">Rezervasyon Formu</header>
        <h5 className="baslık-reserv">İletişim ve Fatura Bilgileri</h5>
        <form className="form-reserv" action="#">
          <div className="column-res">
            <div className="input-box-reserv">
              <label className="label-res">Ad</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Lütfen adınızı giriniz."
                type="text"
                name="ad"
                value={ad}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-reserv">
              <label className="label-res">Soyad</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Lütfen soyadınızı giriniz."
                type="text"
                name="soyad"
                value={soyad}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="column-res">
            <div className="input-box-reserv">
              <label className="label-res">Email</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Lütfen mailinizi giriniz."
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-reserv">
              <label className="label-res">Telefon</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Lütfen telefonunuzu giriniz."
                type="text"
                name="telefon"
                value={telefon}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <h3 className="baslık-oda-res">Oda Bilgileri</h3>
          <div className="input-box-reserv">
            <label className="label-res">Kişi Sayısı</label>

            <select
              className="input-reserv"
              name="kisiSayisi"
              value={kisiSayisi}
              onChange={handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5">6</option>
            </select>
          </div>

          <div className="column-res">
            <div className="input-box-reserv">
              <label className="label-res">Giriş Tarihi</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Enter birth date"
                type="date"
                name="girisTarihi"
                value={girisTarihi}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-reserv">
              <label className="label-res">Çıkış Tarihi</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Enter birth date"
                type="date"
                name="cikisTarihi"
                value={cikisTarihi}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </section>

      <section className="container-reserv-ödeme">
        <header className="header-res">Ödeme Formu</header>
        <h5 className="baslık-reserv">Kart Bilgileri</h5>

        <form className="form-reserv" action="#">
          <div className="column-res">
            <div className="input-box-reserv">
              <label className="label-res">Kart Üzerindeki Ad Soyad</label>
              <input
                className="input-reserv"
                required=""
                placeholder="Lütfen adınızı ve soyadınızı giriniz."
                type="text"
                name="kartUzerindekiAdSoyad"
                value={kartUzerindekiAdSoyad}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-box-reserv">
            <label className="label-res">Kart Numarası</label>
            <input
              className="input-reserv"
              required=""
              placeholder="_ __ __ __"
              type="text"
              name="kartNumarası"
              value={kartNumarasi}
              onChange={handleInputChange}
            />
          </div>
          <div className="column-res">
            <div className="input-box-reserv">
              <label className="label-res">Son Kullanma Tarihi</label>

              <select
                className="input-reserv"
                name="sonKullanmaAy"
                value={sonKullanmaAy}
                onChange={handleInputChange}
              >
                <option value="Ay" disabled>
                  Ay
                </option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
                <option value="6">5</option>
                <option value="7">6</option>
                <option value="8">7</option>
                <option value="8">8</option>
                <option value="8">9</option>
                <option value="8">10</option>
                <option value="8">11</option>
                <option value="8">12</option>
              </select>
            </div>
            <div className="input-box-reserv">
              <label className="label-res">Yıl</label>

              <select
                className="input-reserv"
                name="sonKullanmaYil"
                value={sonKullanmaYil}
                onChange={handleInputChange}
              >
                <option value="Yıl" disabled>
                  Yıl
                </option>
                <option value="2">2023</option>
                <option value="3">2024</option>
                <option value="4">2024</option>
                <option value="5">2025</option>
                <option value="6">2026</option>
                <option value="7">2027</option>
                <option value="2">2028</option>
                <option value="3">2029</option>
                <option value="4">2030</option>
                <option value="5">2031</option>
                <option value="6">2032</option>
                <option value="7">2033</option>
                <option value="2">2034</option>
                <option value="3">2035</option>
                <option value="4">2036</option>
                <option value="5">2037</option>
                <option value="6">2038</option>
                <option value="7">2039</option>
                <option value="7">2040</option>
                <option value="7">2041</option>
                <option value="7">2042</option>
                <option value="7">2043</option>
                <option value="7">2044</option>
                <option value="7">2045</option>
                <option value="7">2046</option>
              </select>
            </div>
            <div className="input-box-reserv">
              <label className="label-res">CVC</label>
              <input
                className="input-reserv"
                required=""
                placeholder=""
                type="text"
                name="cvc"
                value={cvc}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <h5 className="baslık-reserv">Kupon & İndirim Kodu Kullanımı</h5>
          <div className="input-box-reserv">
            <div>
              <p className="kupon flex">
                <div className="checkbox-wrapper-12">
                  <div className="cbx">
                    <input
                      id="cbx-12"
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="cbx-12" />
                    <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                      <path d="M2 8.36364L6.23077 12L13 2" />
                    </svg>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo-12">
                        <feGaussianBlur
                          in="SourceGraphic"
                          stdDeviation={4}
                          result="blur"
                        />
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                          result="goo-12"
                        />
                        <feBlend in="SourceGraphic" in2="goo-12" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                Yeni üyelere özel tanımlanan %10 indirim kuponumu kullanmak
                istiyorum.
              </p>
            </div>
          </div>
        </form>

        {isChecked ? (
          <div className="card checkout">
            <label className="title-ödeme">Tutar Bilgisi</label>
            <div className="details">
              <span>Toplam Tutar:</span>
              <span>{fiyat}₺</span>
              <span>Kupun Koduyla Uygulanan İndirim:</span>
              <span>{uygulananİndirim}</span>
            </div>
            <div className="checkout--footer">
              <label className="price">
                <sup>₺</sup>
                {indirimliFiyat}
              </label>
            </div>
          </div>
        ) : (
          <div className="card checkout">
            <label className="title-ödeme">Tutar Bilgisi</label>
            <div className="details">
              <span>Toplam Ödenmesi Gereken Tutar:</span>
              <span>{fiyat}₺</span>
            </div>
            <div className="checkout--footer">
              <label className="price">
                <sup>₺</sup>
                {fiyat}
              </label>
            </div>
          </div>
        )}

        <button
          type="button"
          className="kredi-buton"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div className="container-kredi">
            <div className="left-side-kredi">
              <div className="card-kredi">
                <div className="card-line-kredi" />
                <div className="buttons-kredi" />
              </div>
              <div className="post-kredi">
                <div className="post-line-kredi" />
                <div className="screen">
                  <div className="dollar">$</div>
                </div>
                <div className="numbers" />
                <div className="numbers-line2" />
              </div>
            </div>
            <div className="right-side-kredi">
              <div className="new">Rezervasyonu Tamamla </div>
              <svg
                viewBox="0 0 451.846 451.847"
                height={512}
                width={512}
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path
                  fill="#cfcfcf"
                  data-old_color="#000000"
                  className="active-path"
                  data-original="#000000"
                  d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                />
              </svg>
            </div>
          </div>
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Rezervasyon Bilgileri
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="results-summary-container">
                  <div className="confetti">
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                    <div className="confetti-piece" />
                  </div>
                  <div className="results-summary-container__result">
                    <div className="heading-tertiary">İYİ TATİLLER!</div>
                    <div className="result-box">
                      <div className="heading-primary">{ad}</div>
                    </div>
                    <div className="result-text-box">
                      <div className="heading-secondary"></div>
                      <p className="paragraph">
                        Rezervasyonunuz başarıyla oluşturuldu.
                      </p>
                    </div>
                  </div>
                  <div className="results-summary-container__options">
                    <div className="heading-secondary heading-secondary--blue">
                      REZERVASYON BİLGİLERİ
                    </div>
                    <div className="summary-result-options">
                      <div className="result-option result-option-memory">
                        <div className="icon-box">
                          <span className="memory-icon-text">Ad: </span>

                          <span>{ad}</span>
                        </div>
                      </div>
                      <div className="result-option result-option-verbal">
                        <div className="icon-box">
                          <span className="verbal-icon-text">Soyad:</span>

                          <span>{soyad}</span>
                        </div>
                      </div>
                      <div className="result-option result-option-memory">
                        <div className="icon-box">
                          <span className="memory-icon-text">Email:</span>

                          <span>{email}</span>
                        </div>
                      </div>
                      <div className="result-option result-option-verbal">
                        <div className="icon-box">
                          <span className="verbal-icon-text">Telefon:</span>

                          <span>{telefon}</span>
                        </div>
                      </div>
                      <div className="result-option result-option-memory">
                        <div className="icon-box">
                          <span className="memory-icon-text">Kişi Sayısı:</span>

                          <span>{kisiSayisi}</span>
                        </div>
                      </div>
                      <div className="result-option result-option-verbal">
                        <div className="icon-box">
                          <span className="verbal-icon-text">Giriş Tarihi</span>

                          <span>{girisTarihi}</span>
                        </div>
                      </div>
                    </div>
                    <div className="summary-result-options">
                      <div className="result-option result-option-reaction">
                        <div className="icon-box">
                          <span className="reaction-icon-text">
                            Çıkış Tarihi:{" "}
                          </span>

                          <span>{cikisTarihi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-secondary heading-secondary--blue">
                KART BİLGİLERİ
              </div>
              <div className="ortakDiv">
                <div className="card-kredim">
                  <div className="card__info">
                    <div className="card__logo">MasterCard</div>
                    <div className="card__chip">
                      <svg
                        className="card__chip-lines"
                        role="img"
                        width="20px"
                        height="20px"
                        viewBox="0 0 100 100"
                        aria-label="Chip"
                      >
                        <g opacity="0.8">
                          <polyline
                            points="0,50 35,50"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="0,20 20,20 35,35"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="50,0 50,35"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="65,35 80,20 100,20"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="100,50 65,50"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="35,35 65,35 65,65 35,65 35,35"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="0,80 20,80 35,65"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="50,100 50,65"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                          <polyline
                            points="65,65 80,80 100,80"
                            fill="none"
                            stroke="#000"
                            strokeWidth={2}
                          />
                        </g>
                      </svg>
                      <div className="card__chip-texture" />
                    </div>
                    <div className="card__type">debit</div>
                    <div className="card__number">
                      <span className="card__digit-group">{kartNumarasi}</span>
                    </div>
                    <div className="card__valid-thru" aria-label="Valid thru">
                      Valid
                      <br />
                      thru
                    </div>
                    <div className="card__exp-date">
                      <time dateTime="2038-01">
                        {sonKullanmaAy}/{sonKullanmaYil}
                      </time>
                    </div>
                    <div className="card__name" aria-label="Dee Stroyer">
                      {kartUzerindekiAdSoyad}
                    </div>
                    <div
                      className="card__vendor"
                      role="img"
                      aria-labelledby="card-vendor"
                    >
                      <span id="card-vendor" className="card__vendor-sr">
                        Mastercard
                      </span>
                    </div>
                    <div className="card__texture" />
                  </div>
                </div>
                {isChecked ? (
                  <div className="card checkout">
                    <label className="title-ödeme">Tutar Bilgisi</label>
                    <div className="details">
                      <span>Toplam Tutar:</span>
                      <span>{fiyat}₺</span>
                      <span>Kupun Koduyla Uygulanan İndirim:</span>
                      <span>{uygulananİndirim}</span>
                    </div>
                    <div className="checkout--footer">
                      <label className="price">
                        <sup>₺</sup>
                        {indirimliFiyat.toFixed(2)}
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="card checkout">
                    <label className="title-ödeme">Tutar Bilgisi</label>
                    <div className="details">
                      <span>Toplam Ödenmesi Gereken Tutar:</span>
                      <span>{fiyat}₺</span>
                    </div>
                    <div className="checkout--footer">
                      <label className="price">
                        <sup>₺</sup>
                        {fiyat.toFixed(2)}
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div class="modal-footer">
                <Link to="/">
                  {" "}
                  <button class="signupBtn" data-bs-dismiss="modal">
                    Çıkış
                    <span class="arrow-çıkış">
                      <svg
                        fill="rgb(183, 128, 255)"
                        viewBox="0 0 320 512"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default KullanıcıRezervasyon;
