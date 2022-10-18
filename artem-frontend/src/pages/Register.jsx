import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import AccountForm from "../components/account/AccountForm";
import firebaseApp from "../firebase-config";
import { useEffect } from "react";
import { toast } from "react-toastify";

const auth = getAuth(firebaseApp);
function Register() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/login");
      toast.success("Account created successfully");
    }
  }, [user, navigate]);
  const [repeatPassError, setRepeatPassError] = React.useState(null);

  const handleSubmit = (e, { email, repeatPassword, password }) => {
    e.preventDefault();
    //Check for repeatPassword and set an error if it doesn't match
    if (password !== repeatPassword) {
      setRepeatPassError({
        type: "password mismatch",
        message: "Passwords do not match",
      });
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <Container sx={{ backgroundColor: "#F7F6F5", height: "100vh" }}>
      <AccountForm
        type="register"
        onSubmit={handleSubmit}
        error={repeatPassError || error}
        loading={loading}
      />
    </Container>
  );
}

export default Register;
