import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

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

            <button className="icon-button">
              ?
            </button>

            <button className="icon-button">
              ⌕
            </button>

            <button className="logout-button">
              ◉ Log out
            </button>

            <button className="icon-button">
              ⚙
            </button>

            <button className="icon-button">
              ♟
            </button>

          </div>

        </header>

        <div className="breadcrumb">
          ⌂ / Dashboard
        </div>

        <section className="dashboard">

          <h1>Dashboard</h1>

          <div className="welcome-card">

            <h2>
              Welcome To MyPatientHUB!
            </h2>

            <p>
              Promotion by
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;