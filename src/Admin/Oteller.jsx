import "./oteller.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Oteller() {
  const [oteller, setOteller] = useState([]);
  const [editedOteller, setEditedOteller] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:7082/api/Otel")
      .then((response) => setOteller(response.data.$values))
      .catch((error) => console.error(error));
  }, []);

  const handleFieldChange = (index, field, value) => {
    const updatedOteller = [...editedOteller];
    if (!updatedOteller[index]) {
      updatedOteller[index] = { ...oteller[index] };
    }
    updatedOteller[index][field] = value;
    setEditedOteller(updatedOteller);
  };

  const handleUpdateClick = async (id) => {
    const updatedData = editedOteller.find((item) => item.id === id);

    try {
      await axios.put(`https://localhost:7082/api/Otel/${id}`, updatedData);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (otelId) => {
    try {
      await axios.delete(`https://localhost:7082/api/Otel/${otelId}`);
      window.location.reload();
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  return (
    <div>
      <div className="records table-responsive">
        <div>
          <table width="92%">
            <thead>
              <tr>
                <th>ID</th>
                <th>OTEL</th>
                <th>İSİM</th>
                <th>FİYAT</th>
                <th>RESİM</th>
                <th>ADRES</th>
                <th>TELEFON</th>
                <th>YILDIZ</th>
                <th>ŞEHİR</th>
                <th>HAREKETLER</th>
                <th>
                  <button
                    className="adminbtn1"
                    onClick={() => navigate("/OtelEkle")}
                  >
                    <span className="las la-plus"></span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {oteller.map((otel, index) => (
                <tr key={otel.id}>
                  <td>{otel.id}</td>
                  <td>
                    <div className="client">
                      <div className="client-info">
                        <h4>{otel.isim}</h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedOteller[index]?.isim ?? otel.isim}
                      onChange={(e) =>
                        handleFieldChange(index, "isim", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedOteller[index]?.tlFiyati ?? otel.tlFiyati}
                      onChange={(e) =>
                        handleFieldChange(index, "tlFiyati", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedOteller[index]?.otelResmi ?? otel.otelResmi}
                      onChange={(e) =>
                        handleFieldChange(index, "otelResmi", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedOteller[index]?.aciklama ?? otel.aciklama}
                      onChange={(e) =>
                        handleFieldChange(index, "aciklama", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedOteller[index]?.adres ?? otel.adres}
                      onChange={(e) =>
                        handleFieldChange(index, "adres", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={
                        editedOteller[index]?.yildizSayisi ?? otel.yildizSayisi
                      }
                      onChange={(e) =>
                        handleFieldChange(index, "yildizSayisi", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedOteller[index]?.sehirİsim ?? otel.sehirİsim}
                      onChange={(e) =>
                        handleFieldChange(index, "sehirİsim", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        className="adminbtn2"
                        onClick={() => handleDelete(otel.id)}
                      >
                        <span className="las la-times"></span>
                      </button>
                      <button
                        className="adminbtn3"
                        onClick={() => handleUpdateClick(otel.id)}
                      >
                        <span className="las la-redo-alt"></span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Oteller;
