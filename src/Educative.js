import React from "react";
import "./Educative.css";
import image1 from "./assets/images/symbol 1.png";
import image2 from "./assets/images/education-2 1.png";
import image3 from "./assets/images/returning 2.png";
import image4 from "./assets/images/earning 1.png";
import rectangle from "./assets/images/Rectangle 41.png";

function Educative() {
  return (
    <div className='educative'>
      <div className='educative__header'>
        <h3>Powering the Afen Token</h3>
        <p>
          The Afen serves three distinctive purposes of the NFT marketplaces,
          staking,educational and cashbacks
        </p>
      </div>
      <div className='educative__body-1'>
        <div className='educative__items-1'>
          <img src={image1} alt='' />
          <h2>NFT Marketplace Payments</h2>
          <p>
            When users choose to connect thier transactions using Afen native
            token on our NFT Marketplace, they get a percentage discounts on
            transaction fees
          </p>
        </div>
        <div className='educative__items-1'>
          <img src={image2} alt='' />
          <h2>NFT Marketplace Payments</h2>
          <p>
            When users choose to connect thier transactions using Afen native
            token on our NFT Marketplace, they get a percentage discounts on
            transaction fees
          </p>
        </div>
      </div>
      {/* the rectangular image */}
      <div className='rectangle'>
        <img src={rectangle} alt='' />
        <h2>Africa's leading NFTs Projects, Arts, Real Estate and Education</h2>
      </div>
    </div>
  );
}

export default Educative;
