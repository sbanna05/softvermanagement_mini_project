import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Sidebar({ currentUser, setActiveView }) {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };

  return (
    <aside className="sidebar p-3 d-flex flex-column">
      <div className="text-center mb-4">
        {/*<img
          src="https://via.placeholder.com/80"
          alt="profile"
          className="rounded-circle mb-2"
        />*/}
        <h5>{currentUser.name}</h5>
      </div>

      <input type="text" className="form-control mb-3" placeholder="Search" />

      <nav className="flex-grow-1">
        <ul className="list-unstyled">
          <li className="mb-2" onClick={() => setActiveView("tasks")}>📌 Napi feladataim</li>
          <li className="mb-2" onClick={() => setActiveView("create")}>📝 Feladat kiadása</li>
          <li className="mb-2" onClick={() => setActiveView("archived")}>📂 Archivált feladatok</li>
          {/*<li className="mb-2" onClick={() => setActiveView("progress")}>📊 Dolgozói előrehaladás</li>
          <li className="mb-2" onClick={() => setActiveView("reminders")}>⏰ Emlékeztetők</li>*/}
        </ul>
      </nav>

      <div>
        {/*<button className="btn btn-success w-100 mb-2">Összesítő generálása</button>*/}
        <button className="btn btn-outline-danger w-100" onClick={handleSignOut}>Kilépés</button>
      </div>
    </aside>
  );
}

export default Sidebar;
