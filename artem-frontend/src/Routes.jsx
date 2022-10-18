import React from "react";
import {
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import App from "./App";
import Header from "./components/Header";
import firebaseApp from "./firebase-config";
import Account from "./pages/Account";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Search from "./pages/Search";

const auth = getAuth(firebaseApp);

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const LoginRedirect = ({ children }) => {
  const [user] = useAuthState(auth);
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const createRoutes = () =>
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
        <Route path="bids" element={<ProtectedRoute />} />
        <Route path="create" element={<ProtectedRoute />} />
        <Route path="saved" element={<ProtectedRoute />} />
        <Route path="account" element={<Account />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route
        path="login"
        element={
          <LoginRedirect>
            <Login />
          </LoginRedirect>
        }
      />
      <Route path="register" element={<Register />} />
    </>
  );

export default createRoutes;
