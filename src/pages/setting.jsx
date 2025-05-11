import React, { useContext } from "react";
import ThemeContext from "../context/theme";

export default function Setting() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Settings</h1>
      <hr />
      <div className="text-center mb-4">
        <h5>
          <span className="badge bg-secondary">Current Theme: {theme}</span>
        </h5>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-dark" onClick={() => setTheme("dark")}>
          Change to Dark
        </button>
        <button className="btn btn-light border" onClick={() => setTheme("light")}>
          Change to Light
        </button>
        <button className="btn btn-secondary" onClick={() => setTheme("system")}>
          Use System Theme
        </button>
      </div>
    </div>
  );
}
