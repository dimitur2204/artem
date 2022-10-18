import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

function App({ children }) {
  return (
    <Layout>
      {children}
      <ToastContainer />
    </Layout>
  );
}

export default App;
