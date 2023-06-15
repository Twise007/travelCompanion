import React from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";
import PlaceDetails from "./components/placeDetails/PlaceDetails";

function App() {
  return (
    <div className="bg-white text-black h-screen">
      <Header />
      <div className="flex flex-row">
        <div>
          <Map />
        </div>
        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
