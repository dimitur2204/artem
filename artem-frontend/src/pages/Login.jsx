import React from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Container } from "@mui/material";
import AccountForm from "../components/account/AccountForm";
import firebaseApp from "../firebase-config";

const auth = getAuth(firebaseApp);
function Login() {
  return (
    <Container sx={{ backgroundColor: "#F7F6F5", height: "100vh" }}>
      <AccountForm type="login" />
    </Container>
  );
}

export default Login;
