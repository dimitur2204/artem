import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { Container } from "@mui/material";
import firebaseApp from "../firebase-config";
import AccountForm from "../components/account/AccountForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const auth = getAuth(firebaseApp);
function Login() {
  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleSubmit = (e, { email, password }) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password).then((user) => {
      navigate("/");
      toast.success("Logged in successfully");
    });
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
