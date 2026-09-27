import { useState } from "react";
import Sidebar from "../components/Sidebar";

function FindClinic() {
  const [isOpen, setIsOpen] = useState(false);
  const [clinicName, setClinicName] = useState("");
  const [location, setLocation] = useState("");

  function searchClinic() {
    if (clinicName === "" && location === "") {
      alert("Please enter clinic name or location.");
      return;
    }

    alert(
      `Searching for clinic: ${
        clinicName || "Any clinic"
      } in ${
        location || "Any location"
      }`
    );
  }

  return (
    <div className="app">

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="main-content">

        <header className="top-header">

          <button
            className="hamburger"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>

          <div className="header-right">
            <button className="icon-button">?</button>
            <button className="icon-button">⌕</button>

            <button className="logout-button">
              ◉ Log out
            </button>

            <button className="icon-button">⚙</button>
            <button className="icon-button">♟</button>
          </div>

        </header>

        <div className="breadcrumb">
          ⌂ / Find Clinic
        </div>

        <section className="page-section">

          <h1>Find Clinic</h1>

          <div className="search-card">

            <input
              type="text"
              placeholder="Clinic name"
              value={clinicName}
              onChange={(e) =>
                setClinicName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />

            <button onClick={searchClinic}>
              Search
            </button>

          </div>

          <div className="map-card">

            <div className="map-header">
              <h2>Find Clinics Near You</h2>
            </div>

            <div className="map-area">

              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>

              <div className="map-marker marker-one">
                ▦
              </div>

              <div className="map-marker marker-two">
                ▦
              </div>

              <div className="map-marker marker-three">
                ▦
              </div>

            </div>

          </div>

          <div className="clinic-list">

            <div className="clinic-card">

              <div className="clinic-icon">
                ▦
              </div>

              <div>
                <h3>MyPatient Clinic</h3>
                <p>General Healthcare</p>
                <p>Kabul, Afghanistan</p>
              </div>

            </div>

            <div className="clinic-card">

              <div className="clinic-icon">
                ▦
              </div>

              <div>
                <h3>City Health Clinic</h3>
                <p>Medical Center</p>
                <p>Kabul, Afghanistan</p>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default FindClinic;