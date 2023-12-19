import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout/Layout";
//import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid" >
    <div className="row">
    <div className="col-md-12 my-2">
      <Layout/>                    
    </div>
    </div>
    </div>


  );
}
export default App;
