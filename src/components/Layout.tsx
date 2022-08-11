import React from 'react';
import SharedList from '../components/SharedList/SharedList';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <Header/>
      <div className={'body'}>
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
