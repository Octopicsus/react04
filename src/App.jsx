import React, { useState } from "react";

import Navigation from "./Widgets/Header/Navigation";
import List from "./Widgets/List/List";
import Popup from "./Widgets/Popup/Popup";
import Footer from "./Widgets/Footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item, category) => {
    setSelectedItem(item);
    setSelectedCategory(category);
  };
  
  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Popup 
        selectedItem={selectedItem} 
        selectedCategory={selectedCategory} 
        onClose={handleClosePopup} 
      />
      <Navigation 
        selected={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <List 
        selectedCategory={selectedCategory} 
        onItemSelect={handleItemSelect} 
      />
      <Footer />
    </>
  );
}

export default App;