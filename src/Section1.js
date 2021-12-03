import React from "react";
import "./Section1.css";
import animation from "../src/assets/icons/animation.svg";
import elipse1 from "../src/assets/images/Ellipse1.png";

function Section1() {
  return (
    <div className='section'>
      <div className='section__flex'>
        <div className='section__left'>
          <h2>Biggest Token & NFT Marketplace in Africa</h2>
          <p>
            AFEN is Africa's leading NFT project, with the aim to revolutionize
            the potential sectors- namely Arts, Real Estate, and Education.
          </p>
          <div>
            <ul>
              <li>Learn about our marketplace</li>
            </ul>
          </div>
        </div>
        <div className='section__right'>
          <div className='section__rightContainer'>
            <div className='section__rightCard'>
              <div className='section__info target__1'>
                <div className='section__infoPic'>
                  <img src={elipse1} alt='' />
                </div>
                <p>
                  Africa's leading NFT project, Arts, Real Estate and Education.
                  The best!!!
                </p>
              </div>
              <p className='section__text'>rema boy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
