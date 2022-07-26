import React from "react";
import Home from "./Compoment/Homepage/Home";
import { Routes, Route } from "react-router-dom";
import Topnav from "./Compoment/Topnav";
import Footer from "./Compoment/Footer";
import { Provider } from "react-redux";
import store from "./Store/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScorePage from "./Compoment/ScorCard/ScorePage";

const App = () => {
  return (
    <div className="mx-auto max-w-[1366px]">
      <Provider store={store}>
        <Topnav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ScorePage />} />
        </Routes>

        <Footer />
      </Provider>
    </div>
  );
};

export default App;
