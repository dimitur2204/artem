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
import firebaseApp from "./firebase-config";
import Account from "./pages/Account";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Bids from "./pages/Bids";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Landing from "./pages/Landing"
import Category from "./pages/Category";

const auth = getAuth(firebaseApp);

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" replace />;
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
        <Route path="/" element={<Home />} />
        <Route
          path="bids"
          element={
            <ProtectedRoute>
              <Bids />
            </ProtectedRoute>
          }
        />
        <Route
          path="create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="saved"
          element={
            <ProtectedRoute>
              <Saved />
            </ProtectedRoute>
          }
        />
        <Route
          path="account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="search" element={<Search />} />
        <Route path="post/:id" element={<PostDetails />} />
      </Route>
      <Route path="landing" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  );

export default createRoutes;
