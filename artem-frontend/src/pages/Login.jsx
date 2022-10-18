import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import AccountForm from "../components/account/AccountForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase-config";

const auth = getAuth(firebaseApp);
function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);
  const handleSubmit = (e, { email, password }) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <Container sx={{ backgroundColor: "#F7F6F5", height: "100vh" }}>
      <AccountForm
        type="login"
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Login;
