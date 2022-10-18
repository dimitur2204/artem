import * as React from "react";
import Layout from "./components/Layout";

function App({ children }) {
  console.log(process.env.NODE_ENV);
  return <Layout>{children}</Layout>;
}

export default App;
