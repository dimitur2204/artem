import React from "react";
import { Container } from "@mui/material";
import { getAuth } from "firebase/auth";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import AccountForm from "../components/account/AccountForm";
import firebaseApp from "../firebase-config";

const auth = getAuth(firebaseApp);
function Register() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e, {email,username,password}) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
  };
  return (
    <Container sx={{ backgroundColor: "#F7F6F5", height: "100vh" }}>
      <AccountForm type="register" onSubmit={handleSubmit} error={error} loading={loading} />
    </Container>
  );
}

export default Register;
