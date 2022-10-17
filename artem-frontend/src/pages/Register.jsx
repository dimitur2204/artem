import React from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Container } from "@mui/material";
import AccountForm from "../components/account/AccountForm";
import firebaseApp from "../firebase-config";

const auth = getAuth(firebaseApp);
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Container sx={{ backgroundColor: "#F7F6F5", height: "100vh" }}>
      <AccountForm type="register" onSubmit={handleSubmit} />
    </Container>
  );
}

export default Register;
