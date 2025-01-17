import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <div>
          <Restaurant />
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default App;
