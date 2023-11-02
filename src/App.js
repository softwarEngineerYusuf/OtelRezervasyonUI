import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Components/Login/Login";
import { useHistory } from "react-router-dom";
import Admin from "./Admin/Admin";
import AdminNavbar from "./Admin/AdminNavbar";

import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import CityCard from "./Components/City/CityCard";
import { Route, Routes } from "react-router-dom";
import İstanbul from "./Cities/İstanbul";
import Hatay from "./Cities/Hatay";
import Antalya from "./Cities/Antalya";
import Bursa from "./Cities/Bursa";
import Mersin from "./Cities/Mersin";
import Muğla from "./Cities/Muğla";
import İzmir from "./Cities/İzmir";
import Aydın from "./Cities/Aydın";
import Çanakkale from "./Cities/Çanakkale";
import Register from "./Components/Register/Register";
import Müşteriler from "./Admin/Müşteriler";
import AdminMain from "./Admin/AdminMain";
import Personeller from "./Admin/Personeller";
import Oteller from "./Admin/Oteller";
import Şehirler from "./Admin/Şehirler";
import ŞehirEkle from "./Admin/ŞehirEkle";
import PersonelEkle from "./Admin/PersonelEkle";
import OtelEkle from "./Admin/OtelEkle";
import KayıtNavbar from "./Navbars/KayıtNavbar";
import GirisNavbar from "./Navbars/GirisNavbar";
import GenelKullanıcıNavbar from "./Navbars/GenelKullanıcıNavbar";
import KullanıcıNavbar from "./Navbars/KullanıcıNavbar";
import AdminOrtakNavbar from "./Navbars/AdminOrtakNavbar";
import OtelEkleNavbar from "./Navbars/OtelEkleNavbar";
import PersonelEkleNavbar from "./Navbars/PersonelEkleNavbar";
import ŞehirEkleNavbar from "./Navbars/ŞehirEkleNavbar";
import { UserProvider } from "./UserContext";
import KayıtKullanıcıNavbar from "./Navbars/KayıtKullanıcıNavbar";
import KullanıcıCityCard from "./Components/City/KullanıcıCityKart";
import KayıtKullanıcıCityCard from "./Components/City/KayıtKullanıcıCityCard";
import AdminCityCard from "./Components/City/AdminCityCard";
import KullanıcıRezervasyon from "./Components/Rezervasyon/KullanıcıRezervasyon";
import GenelFavoriSayfası from "./Components/FavoriSayfası/GenelFavoriSayfası";
import KayıtFavori from "./Components/FavoriSayfası/KayıtFavori";

import KullanıcıFavoriSayfası from "./Components/FavoriSayfası/KullanıcıFavoriSayfası";
import GenelFiltre from "./Components/Filtreleme/GenelFiltre";
import { FilterContextProvider } from "./FilterContext";
import Hakkımızda from "./Components/Hakkımızda/Hakkımızda";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [sehirler, setSehirler] = useState([]);
  const [müşteri, setMüşteri] = useState([]);
  const [personel, setPersonel] = useState([]);
  const [otel, setOtel] = useState([]);
  const [users, setUsers] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUsers(user);
    } else {
    }
  });
  useEffect(() => {
    axios
      .get("https://localhost:7082/api/Calisan")
      .then((response) => setPersonel(response.data.$values))
      .catch((error) => console.error(error));

    axios
      .get("https://localhost:7082/api/Sehir")
      .then((response) => setSehirler(response.data.$values))
      .catch((error) => console.error(error));

    axios
      .get("https://localhost:7082/api/Musteri")
      .then((response) => setMüşteri(response.data.$values))
      .catch((error) => console.error(error));

    axios
      .get("https://localhost:7082/api/Otel")
      .then((response) => setOtel(response.data.$values))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FilterContextProvider>
      <UserProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <GenelKullanıcıNavbar />
                  <CityCard card={sehirler} />
                  <Footer />
                </>
              }
            />

            {sehirler.map((sehir) => (
              <Route
                key={sehir.id}
                path={`/${sehir.isim}`}
                element={
                  <>
                    <GenelKullanıcıNavbar />
                    <DynamicCityPage sehir={sehir} />

                    <Footer />
                  </>
                }
              />
            ))}

            {sehirler.map((sehir) => (
              <Route
                key={sehir.id}
                path={`Kullanıcı/Kullanıcı/${sehir.isim}`}
                element={
                  <>
                    <KullanıcıNavbar />
                    <DynamicCityPage sehir={sehir} />
                    <Footer />
                  </>
                }
              />
            ))}

            {sehirler.map((sehir) => (
              <Route
                key={sehir.id}
                path={`KayıtKullanıcıNavbar/KayıtKullanıcıNavbar/${sehir.isim}`}
                element={
                  <>
                    <KayıtKullanıcıNavbar />
                    <DynamicCityPage sehir={sehir} />
                    <Footer />
                  </>
                }
              />
            ))}

            {sehirler.map((sehir) => (
              <Route
                key={sehir.id}
                path={`AdminOrtakNavbar/AdminOrtakNavbar/AdminOrtakNavbar/${sehir.isim}`}
                element={
                  <>
                    <AdminOrtakNavbar />
                    <DynamicCityPage sehir={sehir} />
                    <Footer />
                  </>
                }
              />
            ))}

            <Route
              path="/Register"
              element={
                <>
                  <KayıtNavbar />
                  <Register />{" "}
                </>
              }
            />
            <Route
              path="/Login"
              element={
                <>
                  <GirisNavbar />
                  <Login />{" "}
                </>
              }
            />
            <Route
              path="/Admin"
              element={
                <>
                  <AdminNavbar />
                  <AdminMain />{" "}
                </>
              }
            />
            <Route
              path="/Müşteriler"
              element={
                <>
                  <AdminNavbar />
                  <Müşteriler />
                </>
              }
            />
            <Route
              path="/Personeller"
              element={
                <>
                  <AdminNavbar />
                  <Personeller />
                </>
              }
            />
            <Route
              path="/Oteller"
              element={
                <>
                  <AdminNavbar />
                  <Oteller />
                </>
              }
            />
            <Route
              path="/Şehirler"
              element={
                <>
                  <AdminNavbar />
                  <Şehirler />
                </>
              }
            />
            <Route
              path="/ŞehirEkle"
              element={
                <>
                  <ŞehirEkleNavbar />
                  <ŞehirEkle />{" "}
                </>
              }
            />
            <Route
              path="/PersonelEkle"
              element={
                <>
                  {" "}
                  <PersonelEkleNavbar />
                  <PersonelEkle />
                </>
              }
            />
            <Route
              path="/OtelEkle"
              element={
                <>
                  {" "}
                  <OtelEkleNavbar />
                  <OtelEkle />
                </>
              }
            />

            <Route
              path={`/Kullanıcı`}
              element={
                <>
                  {" "}
                  <KullanıcıNavbar users={users} />
                  <KullanıcıCityCard card={sehirler} />
                  <Footer />
                </>
              }
            />

            <Route
              path={`/KullanıcıRezervasyon`}
              element={
                <>
                  {" "}
                  <KullanıcıRezervasyon />
                  <Footer />
                </>
              }
            />

            <Route
              path="/KayıtKullanıcıNavbar"
              element={
                <>
                  {" "}
                  <KayıtKullanıcıNavbar />
                  <KayıtKullanıcıCityCard card={sehirler} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/AdminOrtakNavbar"
              element={
                <>
                  {" "}
                  <AdminOrtakNavbar />
                  <AdminCityCard card={sehirler} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Favoriler"
              element={
                <>
                  {" "}
                  <KullanıcıNavbar />
                  <KullanıcıFavoriSayfası />
                  <Footer />
                </>
              }
            />
            <Route
              path="/GenelFavoriler"
              element={
                <>
                  {" "}
                  <GenelKullanıcıNavbar />
                  <GenelFavoriSayfası />
                  <Footer />
                </>
              }
            />
            <Route
              path="/GenelFiltre"
              element={
                <>
                  {" "}
                  <GenelKullanıcıNavbar />
                  <GenelFiltre />
                  <Footer />
                </>
              }
            />

            <Route
              path="/KullanıcıFiltre"
              element={
                <>
                  {" "}
                  <KullanıcıNavbar />
                  <GenelFiltre />
                  <Footer />
                </>
              }
            />

            <Route
              path="/KayıtKullanıcıFiltre"
              element={
                <>
                  {" "}
                  <KayıtKullanıcıNavbar />
                  <GenelFiltre />
                  <Footer />
                </>
              }
            />

            <Route
              path="/AdminFiltre"
              element={
                <>
                  {" "}
                  <AdminOrtakNavbar />
                  <GenelFiltre />
                  <Footer />
                </>
              }
            />

            <Route
              path="/KayıtFavori"
              element={
                <>
                  {" "}
                  <KayıtKullanıcıNavbar />
                  <KayıtFavori />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Hakkımızda"
              element={
                <>
                  {" "}
                  <Hakkımızda />
                </>
              }
            />
          </Routes>
          <ToastContainer position="top-right" autoClose={5000} theme="light" />
        </div>
      </UserProvider>
    </FilterContextProvider>
  );
}

function DynamicCityPage({ sehir }) {
  const components = {
    İstanbul,
    Hatay,
    Antalya,
    Bursa,
    Muğla,
    İzmir,
    Mersin,
    Aydın,
    Çanakkale,
  };

  const CityComponent = components[sehir.isim];

  return <CityComponent sehir={sehir} />;
}

export default App;
