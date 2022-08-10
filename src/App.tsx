import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Share from "./pages/Share";
import { ERoute } from "./constants/route";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path={ERoute.List} element={<List/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path={ERoute.Share} element={<Share/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
