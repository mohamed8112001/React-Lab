import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Parent from "./components/todo/parent.jsx";
import UsersList from "./components/users/userList.jsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  // <Parent/>
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
