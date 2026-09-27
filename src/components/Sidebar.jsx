import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>MyPatientHUB</h2>

          <button
            className="close-sidebar"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="sidebar-nav">

          <NavLink
            to="/dashboard"
            onClick={() => setIsOpen(false)}
          >
            <span>▣</span>
            Dashboard
          </NavLink>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>▤</span>
            Appointments
          </a>

          <NavLink
            to="/find-doctor"
            onClick={() => setIsOpen(false)}
          >
            <span>♟</span>
            Find Doctor
          </NavLink>

          <NavLink
            to="/find-clinic"
            onClick={() => setIsOpen(false)}
          >
            <span>▦</span>
            Find Clinic
          </NavLink>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>▣</span>
            Chat
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>▤</span>
            Find Market-Place
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>▦</span>
            Find Pharmacy
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>▤</span>
            My Dependents
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>⚒</span>
            My Account
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>⚙</span>
            Settings
          </a>

        </nav>
      </aside>

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;