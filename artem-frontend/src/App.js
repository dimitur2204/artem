import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Layout from "./components/Layout";

function App({ children }) {
  return (
    //defines the layout of the application. reusable on every page. in our case, it defines the layout of the nav bar 
    <Layout>
      {children}
      {/* Toast message provides simple feedback about an operation in a small popup */}
      <ToastContainer />
    </Layout>
  );
}

export default App;
