import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import App from "./App";
import Header from "./components/Header";
import "./index.css";
import Account from "./pages/Account";
import reportWebVitals from "./reportWebVitals";
import firebaseConfig from "../firebase-config";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <App>
          <Outlet />
        </App>
      }
    >
      <Route path="/" element={<Header text="Home" />} />
      <Route path="bids" element={<Header text="Bids" />} />
      <Route path="create" element={<Header text="Create" />} />
      <Route path="saved" element={<Header text="Saved" />} />
      <Route path="account" element={<Account />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// Initialize Firebase
initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
