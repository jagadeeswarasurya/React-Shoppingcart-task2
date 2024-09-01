import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Navbar cartValue={cartValue} />
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <Card setCartValue={setCartValue}></Card>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;