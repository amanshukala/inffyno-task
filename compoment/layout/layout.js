import { Fragment } from "react";
import Header from "./header"; 


import React from 'react'
import Footer from "./footer";

const Layout = (props) => {
  return (
    <Fragment>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout