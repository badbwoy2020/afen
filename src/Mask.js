import React from "react";
import "./Mask.css";
import mask from "../src/assets/images/mask.png";
import ListItem from "./ListItem";

function Mask() {
  return (
    <div className='mask'>
      <div className='mask__flex'>
        <div className='mask__left'>
          <h1>Trade NFTs</h1>
          <h3>The African Way To NFT</h3>

          <p>
            Blockchain has the potential to adequately transform African
            society. Offering insurmountable opportunities to those leveraging
            it to build a new structure in diverse sectors
          </p>

          <div className='mask__button'>
            <h2>See Our Marketplace</h2>
          </div>
        </div>
        <div className='mask__right'>
          <div>
            <img src={mask} alt='' />
          </div>
        </div>
      </div>
      <ListItem />
    </div>
  );
}

export default Mask;
