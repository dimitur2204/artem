import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"
import Layout from "./components/Layout";

function App({ children }) {
  return (
    //in our case, layout consists of nav bar 
    <Layout>
      {children}
      <ToastContainer />
    </Layout>
  );
}

export default App;
