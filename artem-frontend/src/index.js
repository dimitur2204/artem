import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import "./index.css";
import Account from "./pages/Account";
import Search from "./pages/Search";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Register from "./pages/Register";
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <App>
            <Outlet />
          </App>
        }
      >
        <Route path="/" element={<Header text="Home" withSearch />} />
        <Route path="bids" element={<Header text="Bids" />} />
        <Route path="create" element={<Header text="Create" />} />
        <Route path="saved" element={<Header text="Saved" />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  ), {basename: '/artem'}
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
