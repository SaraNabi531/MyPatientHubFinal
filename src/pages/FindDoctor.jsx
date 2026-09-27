import { useState } from "react";
import Sidebar from "../components/Sidebar";

function FindDoctor() {
  const [isOpen, setIsOpen] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [location, setLocation] = useState("");

  function searchDoctor() {
    if (doctorName === "" && location === "") {
      alert("Please enter doctor name or location.");
      return;
    }

    alert(
      `Searching for doctor: ${
        doctorName || "Any doctor"
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
          ⌂ / Find Doctor
        </div>

        <section className="page-section">

          <h1>Find Doctor</h1>

          <div className="search-card">

            <input
              type="text"
              placeholder="Doctor name"
              value={doctorName}
              onChange={(e) =>
                setDoctorName(e.target.value)
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

            <button onClick={searchDoctor}>
              Search
            </button>

          </div>

          <div className="map-card">

            <div className="map-header">
              <h2>Find Doctors Near You</h2>
            </div>

            <div className="map-area">

              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>

              <div className="map-marker marker-one">
                ♟
              </div>

              <div className="map-marker marker-two">
                ♟
              </div>

              <div className="map-marker marker-three">
                ♟
              </div>

            </div>

          </div>

          <div className="doctor-list">

            <div className="doctor-card">

              <div className="doctor-icon">
                ♟
              </div>

              <div>
                <h3>Dr. Sarah Ahmad</h3>
                <p>General Physician</p>
                <p>Kabul, Afghanistan</p>
              </div>

            </div>

            <div className="doctor-card">

              <div className="doctor-icon">
                ♟
              </div>

              <div>
                <h3>Dr. Ahmad Khan</h3>
                <p>Cardiologist</p>
                <p>Kabul, Afghanistan</p>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default FindDoctor;