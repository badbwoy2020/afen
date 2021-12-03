import React from "react";
import "./ListItem.css";
import country1 from "./assets/icons/country1.svg";
import country2 from "./assets/icons/country2.svg";
import country3 from "./assets/icons/country3.svg";
import country4 from "./assets/icons/country4.svg";
import country5 from "./assets/icons/country5.svg";
import country6 from "./assets/icons/country6.svg";
import country7 from "./assets/icons/country7.svg";
import country8 from "./assets/icons/country8.svg";

function ListItem() {
  return (
    <div className='list'>
      <h2>Currently Utilized By other countries in Africa and beyond</h2>
      <div className='list__countries'>
        <img src={country1} alt='' />

        <img src={country2} alt='' />

        <img src={country3} alt='' />

        <img src={country4} alt='' />

        <img src={country5} alt='' />

        <img src={country6} alt='' />

        <img src={country7} alt='' />

        <img src={country8} alt='' />
      </div>
    </div>
  );
}

export default ListItem;
